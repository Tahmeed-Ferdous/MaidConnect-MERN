import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const Login = () => {


  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from ? location.state.from : location.pathname || '/';
  const { user, setUser } = useAuth()

  useEffect(() => {
    user?.email && navigate(from, { replace: true })
  }, [from, navigate, user?.email])

  const [loginError, setLoginError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);  // State for button processing
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processLogin(data);

  const processLogin = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };

    setIsProcessing(true);  // Start processing (disable button and change text)

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.status) {
          setUser(result.user);
          localStorage.setItem('uId', result.user._id);
          setLoginError("");
          result.user.role === "user" && navigate("/dashboard");
          result.user.role === "admin" && navigate("/admin");
          result.user.role === "staff" && navigate("/staffdashboard");
          console.log(result)

        }
        else {
          setLoginError(result.message);
          document.getElementById("login_form").reset();  // Reset form
        }
      } catch (error) {
        fetchData();
      } finally {
        setIsProcessing(false);  // Reset button state
      }
    };

    fetchData();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-4">
        <form
          id="login_form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>

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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
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
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-black"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            id="login_btn"
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
            disabled={isProcessing}  // Disable button while processing
          >
            {isProcessing ? "Processing Login ..." : "Login"}  {/* Change text while processing */}
          </button>

          {/* Register Link */}
          <p className="my-2 text-rose-900">{loginError}</p>

          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 underline hover:text-blue-800">
              Register as user
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
