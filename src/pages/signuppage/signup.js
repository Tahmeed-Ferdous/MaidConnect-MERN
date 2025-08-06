import React from "react";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => processSignup(data);
    const processSignup = (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: "user", 
        }
        const btn = document.getElementById("signup_btn");
        btn.innerText = "Signing Up...";
        btn.disabled = true;
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-4">
        <form
          id="signup_form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-8 border border-gray-200"
        >
          <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

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
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
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
              autoComplete="new-password"
              placeholder="Create a password"
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-black"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            id="signup_btn"
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
          >
            Sign Up
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
