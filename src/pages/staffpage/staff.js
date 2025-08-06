import React from "react";
import Navbar from "../../components/Navbar";
import StaffCard from "../../components/staffs/staffcard";
import maid1 from "../../images/maid1.jpg";
import maid2 from "../../images/maid2.jpg";
import maid3 from "../../images/maid3.jpg";

const Staff = () => {
    const staffs = [
    {
        _id: "123",
        name: "John Doe",
        role: "Cleaner",
        location: "Mumbai",
        bio: "Expert in deep cleaning and sanitization with attention to detail.",
        experience: "5 years",
        image: maid1,
        services: ["House Cleaning", "Bathroom Deep Clean"],
        rate: "$10",
    },
    {
        _id: "234",
        name: "Jane Smith",
        role: "Cook",
        location: "Delhi",
        bio: "Specializes in home-style cooking and meal planning.",
        experience: "7 years",
        image: maid2,
        services: ["Daily Cooking"],
        rate: "$8",
    },
    {
        _id: "345",
        name: "Alice Johnson",
        role: "Housekeeper",
        location: "Bangalore",
        bio: "Skilled in housekeeping and organizing homes efficiently.",
        experience: "4 years",
        image: maid3,
        services: ["House Cleaning"],
        rate: "$5",
    },
    ];
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet Our Maids</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {staffs.map((staff) => (
                        <StaffCard key={staff._id} staff={staff} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;