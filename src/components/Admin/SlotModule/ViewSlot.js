import React from "react";
import useAuth from "../../../hooks/useAuth"; // Importing useAuth to access the slots from the AuthContext
import { toast } from "react-toastify";

const ViewSlot = () => {
    const { slots, setSlots } = useAuth(); // Accessing slots and setSlots from useAuth

    // Handle deleting a slot
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/slot/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (result.status) {
                toast.success(`${result.message}`);
                // After deletion, update slots state by re-fetching
                const updatedSlots = await fetch("http://localhost:5000/slots").then(res => res.json());
                setSlots(updatedSlots.slot); // Update with new slots after deletion
            }
        } catch (err) {
            console.log("Error deleting slot:", err);
            toast.error("Failed to delete the slot. Please try again.");
        }
    };

    return (
        <div className="overflow-x-auto my-5 p-2">
            <table className="table-auto w-full bg-white border border-gray-200">
                <thead className="bg-white border-b sticky top-0 z-10">
                    <tr>
                        <th className="text-sm font-medium text-gray-900 p-3 text-left w-10">#</th>
                        <th className="text-sm font-medium text-gray-900 p-3 text-left w-40">Slot Label</th>
                        <th className="text-sm font-medium text-gray-900 p-3 text-left w-40">Start Duration</th>
                        <th className="text-sm font-medium text-gray-900 p-3 text-left w-32">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.length > 0 ? (
                        slots.map((slot, index) => (
                            <tr key={slot._id} className="border-b hover:bg-gray-50">
                                <td className="p-3 text-sm text-gray-700">{index + 1}</td>
                                <td className="p-3 text-sm text-gray-700 truncate">{slot.label}</td>
                                <td className="p-3 text-sm text-gray-700">{slot.start_time} - {slot.end_time}</td>
                                <td className="p-3 text-sm text-gray-700">
                                    <button
                                        onClick={() => handleDelete(slot._id)}
                                        className="p-2 hover:bg-red-100 rounded-md transition-colors duration-200 cursor-pointer group"
                                        title="Delete slot"
                                    >
                                        {/* Delete icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-red-600 group-hover:text-red-800"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="p-3 text-center text-gray-500">
                                No slots found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewSlot;
