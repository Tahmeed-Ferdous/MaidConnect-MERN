import React from "react";
import { useNavigate } from "react-router-dom";

const StaffCard = ({ staff }) => {
    const navigate = useNavigate();
    const maxVisible = 3;
    const visibleServices = staff.services.slice(0, maxVisible);
    const hiddenCount = staff.services.length - maxVisible;

    return (
        <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow font-bold text-xl text-gray-800 z-10">
                {staff.rate}
            </div>
            <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{staff.name}</h2>
                <p className="text-sm text-gray-600">{staff.role} — {staff.location}</p>
                <p className="text-sm text-gray-700 mt-2">{staff.bio}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {visibleServices.map((service, index) => (
                        <button
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow hover:bg-gray-200 transition"
                            type="button"
                        >
                            {service}
                        </button>
                    ))}
                    {hiddenCount > 0 && (
                        <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium shadow">
                            +{hiddenCount} more
                        </span>
                    )}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    <p>Experience: {staff.experience}</p>
                </div>
                <button
                    onClick={() => {
                        navigate(`/staff-details/${staff._id}`);
                    }}
                    className="mt-4 w-full bg-black text-white py-2 rounded-lg shadow hover:bg-gray-900 transition-colors duration-200 font-semibold tracking-wide flex items-center justify-center gap-2 z-20 relative"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
                        <path d="M10 4a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6a6 6 0 0 1 6-6zm0 0v2m0 8v2m-4-4h2m8 0h2" />
                    </svg>
                    See Profile
                </button>
            </div>
        </div>
    );
};

export default StaffCard;

