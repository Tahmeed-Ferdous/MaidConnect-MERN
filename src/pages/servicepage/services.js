import React from "react";
import Navbar from "../../components/Navbar";
import ServicesCard from "../../components/services/servicescard";
import cleaningImg from "../../images/cover.jpeg";
import cleaning1 from "../../images/cleaning1.jpg";
import cleaning2 from "../../images/cleaning2.jpg";


const Service = () => {
const services = [
    {
        "_id": "1",
        "name": "House Cleaning",
        "description": "Comprehensive house cleaning services to keep your home spotless and hygienic.",
        "category": "House Cleaning",
        "image": cleaningImg,
    },
    {
        "_id": "2",
        "name": "Bathroom Deep Clean",
        "description": "Intensive bathroom cleaning and sanitization for tiles, toilets, and sinks.",
        "category": "Bathroom Cleaning",
        "image":cleaning1,
    },
    {
        "_id": "3",
        "name": "Daily Cooking",
        "description": "Home-style daily cooking service tailored to your preferences.",
        "category": "Cooking",
        "image": cleaning2,
    },
];

const categories = [
    { "_id": "123", "name": "House Cleaning" },
    { "_id": "234", "name": "Bathroom Cleaning" },
    { "_id": "345", "name": "Cooking" },
];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-900 mb-8">All Services</h1>

        {categories.map((category) => (
          <div key={category._id} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.filter((service) => service.category === category.name).map((service) => (
                  <ServicesCard key={service._id} service={service} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

