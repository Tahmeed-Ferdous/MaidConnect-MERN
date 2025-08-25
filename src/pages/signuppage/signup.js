import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signup = () => {
  const {setUser} = useAuth()
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


const onSubmit = async (data) => {
  setIsLoading(true);
  setSignUpError("");
  setSuccessMessage("");

  // Add the role to the form data (default to 'user' role)
  const formData = {
    name: data.name,
    email: data.email,
    password: data.password,
    role: "user",  // Set role here (default to 'user')
  };
  console.log(formData)

  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.status) {
      localStorage.setItem('uId', result.user._id);
      setUser(result.user);  // Assuming setUser updates your user state
      setSuccessMessage("Account created successfully! Redirecting to login...");
      result.user.role === "user" && navigate("/dashboard");  
      result.user.role === "admin" && navigate("/admin");
      result.user.role === "staff" && navigate("/staffdashboard");  
      reset();  // Reset form using react-hook-form

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setSignUpError(result.message || "Signup failed. Please try again.");
    }
  } catch (error) {
    console.error("Signup error:", error);
    setSignUpError("Network error. Please check your connection and try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {signUpError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {signUpError}
            </div>
          )}

          {/* Name Input */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder="Enter your full name"
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-black"
              {...register("name", { 
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters"
                }
              })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-black"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address"
                }
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              placeholder="Create a password"
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-black"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 rounded transition ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
