import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StaffAbout from "../../components/staffs/staffabout";
import StaffRating from "../../components/staffs/staffrating";
import maid1 from "../../images/maid1.jpg";
import maid2 from "../../images/maid2.jpg";
import maid3 from "../../images/maid3.jpg";

const StaffDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");

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

  const staff = staffs.find((s) => s._id === id);

  if (!staff) return <div className="text-center mt-10 text-red-600">Staff not found</div>;

  return (
    <div>
      <Navbar />

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">{staff.name}</h2>
        <p className="text-gray-600">{staff.role} &middot; {staff.experience}</p>
      </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-6 py-2 rounded-md font-semibold ${
            activeTab === "about"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("ratings")}
            className={`px-6 py-2 rounded-md font-semibold ${
            activeTab === "ratings"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Ratings
          </button>
        </div>

        {/* Content */}
      <div className="mt-6 max-w-2xl mx-auto px-4">
        {activeTab === "about" ? <StaffAbout staff={staff} /> : <StaffRating />}
      </div>
    </div>
  );
};

export default StaffDetails;
