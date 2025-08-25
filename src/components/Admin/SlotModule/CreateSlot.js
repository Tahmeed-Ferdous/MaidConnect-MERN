import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";

const CreateSlot = () => {
    const { setSlots } = useAuth(); // Assuming useAuth provides slots state and setSlots to update it
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => processCreatingSlot(data);

    const processCreatingSlot = async (data) => {
        const formData = {
            label: data.label,
            start_time: data.start_time,
            end_time: data.end_time
        };

        setIsLoading(true);

        try {
            // Create slot API call
            const response = await fetch('http://localhost:5000/slot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            console.log("Create Slot Response: ", result); // Debugging API response

            if (result.status) {
                toast.success(`${result.message}`);

                // Fetch updated slots list
                try {
                    const slotsResponse = await fetch("http://localhost:5000/slots");
                    const slotsResult = await slotsResponse.json();

                    console.log("Fetched Slots after Create: ", slotsResult); 

                    if (slotsResult.status) {
                        setSlots(slotsResult.slot);
                    } else {
                        console.log("Error in slots fetch response:", slotsResult);
                    }
                } catch (err) {
                    console.log("Error fetching slots:", err);
                    toast.error("Error fetching slots after creation.");
                }

               
                reset();
            } else {
                toast.error(`${result.message}`);
            }
        } catch (error) {
            console.log("Error creating slot:", error);
            toast.error("Failed to create slot. Please try again.");
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
                Create a Slot
            </h1>

            {/* Slot Label */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter Slot Label"
                    autoComplete="label"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    {...register("label", { required: "Slot label is required" })}
                />
                {errors.label && (
                    <span className="text-red-500 text-sm">{errors.label.message}</span>
                )}
            </div>

            {/* Start Time */}
            <div className="mb-4">
                <input
                    type="time"
                    placeholder="Enter start time"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    {...register("start_time", { required: "Start time is required" })}
                />
                {errors.start_time && (
                    <span className="text-red-500 text-sm">{errors.start_time.message}</span>
                )}
            </div>

            {/* End Time */}
            <div className="mb-4">
                <input
                    type="time"
                    placeholder="Enter end time"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    {...register("end_time", { required: "End time is required" })}
                />
                {errors.end_time && (
                    <span className="text-red-500 text-sm">{errors.end_time.message}</span>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Creating Slot...' : 'Create Slot'}
            </button>
        </form>
    );
};

export default CreateSlot;
