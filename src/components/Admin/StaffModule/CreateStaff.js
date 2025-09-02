import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateStaff = () => {
  const { categories, services, setStaffs } = useAuth(); // Fetch categories and services from useAuth
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => processCreatingStaff(data);

  const processCreatingStaff = async (data) => {
    const formData = {
      name: data.name,
      location: data.location,
      bio: data.bio,
      experience: data.experience,
      image: data.image,
      category: data.category, // Selected category
      services: Array.isArray(data.service) ? data.service : [data.service],   // Change to services
      rate: data.rate,
    };

    setIsLoading(true);

    try {
      // Create staff - fix the endpoint
      const response = await fetch('http://localhost:5000/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status) {
        toast.success(`${result.message}`);

        // Fetch updated staff list - fix the endpoint
        try {
          const staffResponse = await fetch("http://localhost:5000/staffs");
          const staffResult = await staffResponse.json();

          if (staffResult.status) {
            setStaffs(staffResult.staffs); // Use correct property name
          } else {
            console.log(staffResult);
          }
        } catch (err) {
          console.log("Error fetching staffs:", err);
        }

        // Reset form
        reset();
      } else {
        toast.error(`${result.message}`);
      }
    } catch (error) {
      console.log("Error creating staff:", error);
      toast.error("Failed to create staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-xl p-6 w-full h-auto border border-gray-200"
    >
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Create a Staff
      </h1>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Staff Name"
          autoComplete="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("name", { required: "Staff name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Location */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Location"
          autoComplete="location"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <span className="text-red-500 text-sm">{errors.location.message}</span>
        )}
      </div>

      {/* Bio */}
      <div className="mb-4">
        <textarea
          placeholder="Enter Bio"
          autoComplete="bio"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("bio", { required: "Bio is required" })}
        />
        {errors.bio && (
          <span className="text-red-500 text-sm">{errors.bio.message}</span>
        )}
      </div>

      {/* Experience */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Experience"
          autoComplete="experience"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("experience", { required: "Experience is required" })}
        />
        {errors.experience && (
          <span className="text-red-500 text-sm">{errors.experience.message}</span>
        )}
      </div>

      {/* Image */}
      <div className="mb-4">
        <input
          type="url"
          placeholder="Enter Image URL"
          autoComplete="image"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("image", { required: "Image URL is required" })}
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image.message}</span>
        )}
      </div>

      {/* Category Selection */}
      <div className="mb-4">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("category", { required: "Please select a category" })}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-red-500 text-sm">{errors.category.message}</span>
        )}
      </div>

      {/* Service Selection (allowing multiple services) */}
      <div className="mb-4">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("service", { required: "Please select at least one service" })}
          multiple
        >
          <option value="">Select Service</option>
          {Array.from(new Set(services.map((service) => service.name))) // Remove duplicates
            .map((uniqueServiceName) => {
              // Find the full service object based on the name (just for the display in the dropdown)
              const service = services.find((s) => s.name === uniqueServiceName);
              return (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              );
            })}
        </select>
        {errors.service && (
          <span className="text-red-500 text-sm">{errors.service.message}</span>
        )}
      </div>


      {/* Rate */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Rate"
          autoComplete="rate"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("rate", { required: "Rate is required" })}
        />
        {errors.rate && (
          <span className="text-red-500 text-sm">{errors.rate.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating Staff..." : "Create Staff"}
      </button>
    </form>
  );
};

export default CreateStaff;
