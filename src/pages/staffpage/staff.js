import React from "react";
import Navbar from "../../components/Navbar";
import StaffCard from "../../components/staffs/staffcard";
import useAuth from "../../hooks/useAuth";

const Staff = () => {
    const { staffs } = useAuth(); // Fetch staffs from useAuth

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet Our Maids</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {staffs.length > 0 ? (
                        staffs.map((staff) => (
                            <StaffCard key={staff._id} staff={staff} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No staff available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Staff;
