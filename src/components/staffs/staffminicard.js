import React from 'react';

const StaffMiniCard = ({ staff }) => {
    return (
        <div>
            <div key={staff._id} className="bg-white shadow rounded-lg p-4">
                <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold">{staff.name}</h3>
                <p className="text-sm text-gray-600">{staff.role}</p>
                <p className="text-sm text-gray-600">{staff.location}</p>
                <p className="mt-2 text-gray-700 text-sm">{staff.bio}</p>
                <p className="mt-1 text-sm font-medium">Experience: {staff.experience}</p>
                <p className="mt-2 text-lg font-bold text-green-600">
                    Rate: {staff.rate} /hr
                </p>
                <div className="flex gap-3 mt-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
                        Book Now
                    </button>
                    <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-200 transition border border-blue-600">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};
export default StaffMiniCard;