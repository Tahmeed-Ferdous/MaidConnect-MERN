import React from "react";
import { useParams } from "react-router-dom";
import maid1 from "../../images/maid1.jpg";
import maid2 from "../../images/maid2.jpg";
import maid3 from "../../images/maid3.jpg";
import StaffMiniCard from "../staffs/staffminicard";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";

const ServiceDetails = () => {
  const { id } = useParams(); 
  const {services} = useAuth();

  // const services = [
  //   {
  //     _id: "1",
  //     name: "House Cleaning",
  //     description: "Comprehensive house cleaning services to keep your home spotless and hygienic.",
  //     category: "House Cleaning",
  //     image: cleaningImg,
  //   },
  //   {
  //     _id: "2",
  //     name: "Bathroom Deep Clean",
  //     description: "Intensive bathroom cleaning and sanitization for tiles, toilets, and sinks.",
  //     category: "Bathroom Cleaning",
  //     image: cleaning1,
  //   },
  //   {
  //     _id: "3",
  //     name: "Daily Cooking",
  //     description: "Home-style daily cooking service tailored to your preferences.",
  //     category: "Cooking",
  //     image: cleaning2,
  //   },
  // ];

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

  const service = services.find((s) => s._id === id);

  if (!service) {
    return <div className="text-center text-red-500 mt-10">Service not found.</div>;
  }

  const matchedStaffs = staffs.filter((staff) =>
    staff.services.includes(service.name)
  );

  return (
    <div className="px-4">
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-6">{service.name}</h1>
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
        <p className="text-gray-700 mb-4">{service.description}</p>
        <h2 className="text-xl font-semibold mb-2">
          Category: {service.category}
        </h2>
      </div>

      {/* Staff Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Available Staffs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedStaffs.length > 0 ? (
            matchedStaffs.map((staff) => (
              <StaffMiniCard key={staff._id} staff={staff}/>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No staff available for this service.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

