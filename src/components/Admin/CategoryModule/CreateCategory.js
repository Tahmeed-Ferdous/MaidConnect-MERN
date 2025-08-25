import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateCategory = () => {
    const { setCategories } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => processCreatingCategory(data);

    const processCreatingCategory = async (data) => {
        const formData = {
            name: data.name
        };

        setIsLoading(true);

        try {
            // Create category - fix the endpoint
            const response = await fetch('http://localhost:5000/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            
            if (result.status) {
                toast.success(`${result.message}`);
                
                // Fetch updated categories list - fix the endpoint
                try {
                    const categoriesResponse = await fetch("http://localhost:5000/categories");
                    const categoriesResult = await categoriesResponse.json();
                    
                    if (categoriesResult.status) {
                        setCategories(categoriesResult.categories); // Use correct property name
                    } else {
                        console.log(categoriesResult);
                    }
                } catch (err) {
                    console.log("Error fetching categories:", err);
                }
                
                // Reset form
                reset();
            } else {
                toast.error(`${result.message}`);
            }
        } catch (error) {
            console.log("Error creating category:", error);
            toast.error("Failed to create category. Please try again.");
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
                Create a Category
            </h1>

            {/* Name */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter Category Name"
                    autoComplete="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                    {...register("name", { required: "Category name is required" })}
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
            </div>     

            {/* Submit */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Creating Category...' : 'Create Category'}
            </button>
        </form>
    );
};

export default CreateCategory;