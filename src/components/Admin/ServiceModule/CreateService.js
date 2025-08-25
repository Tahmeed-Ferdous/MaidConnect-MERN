import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateService = () => {
  const { setServices } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => processCreatingService(data);

  const processCreatingService = async (data) => {
    const formData = {
      name: data.name,
      description: data.description,
      category: data.category, // Add category here
      image: data.image, // Add image URL or handle image upload
    };
    setIsLoading(true);

    try {
      // Create service - fix the endpoint
      const response = await fetch('http://localhost:5000/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status) {
        toast.success(`${result.message}`);

        // Fetch updated services list - fix the endpoint
        try {
          const servicesResponse = await fetch("http://localhost:5000/services");
          const servicesResult = await servicesResponse.json();
          if (servicesResult.status) {
            setServices(servicesResult.services); // Use correct property name
          } else {
            console.log(servicesResult);
          }
        } catch (err) {
          console.log("Error fetching services:", err);
        }

        // Reset form
        reset();
      } else {
        toast.error(`${result.message}`);
      }
    } catch (error) {
      console.log("Error creating service:", error);
      toast.error("Failed to create service. Please try again.");
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
        Create a Service
      </h1>

      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Service Name"
          autoComplete="name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("name", { required: "Service name is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        <textarea
          placeholder="Enter Service Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">{errors.description.message}</span>
        )}
      </div>

      {/* Category */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Service Category"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("category", { required: "Category is required" })}
        />
        {errors.category && (
          <span className="text-red-500 text-sm">{errors.category.message}</span>
        )}
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <input
          type="url"
          placeholder="Enter Image URL"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          {...register("image", { required: "Image URL is required" })}
        />
        {errors.image && (
          <span className="text-red-500 text-sm">{errors.image.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating Service..." : "Create Service"}
      </button>
    </form>
  );
};

export default CreateService;
