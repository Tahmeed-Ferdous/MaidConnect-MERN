import React from "react";
import Navbar from "../../components/Navbar";
import cleaningImg from "../../images/cover.jpeg";

const Service = () => {
    const services = [
        // House Cleaning
        {
            id: 1,
            name: "Cleaning",
            description: (
                <>
                    <p>
                        <i>Comprehensive house cleaning services</i> to keep your home spotless and hygienic.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Dusting all surfaces</li>
                        <li>Vacuuming carpets and rugs</li>
                        <li>Wiping windows and doors</li>
                        <li>Sanitizing high-touch areas</li>
                    </ul>
                </>
            ),
            category: "House Cleaning",
            image: cleaningImg
        },
        {
            id: 2,
            name: "Dusting",
            description: (
                <>
                    <p>
                        <i>Thorough dusting</i> for a cleaner, allergen-free environment.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Furniture and shelves</li>
                        <li>Ceiling fans and light fixtures</li>
                        <li>Baseboards and corners</li>
                    </ul>
                </>
            ),
            category: "House Cleaning",
            image: cleaningImg
        },
        {
            id: 3,
            name: "Floor Mopping",
            description: (
                <>
                    <p>
                        <i>Professional mopping</i> for sparkling clean floors.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Tile, marble, and wooden floors</li>
                        <li>Removal of stains and spills</li>
                        <li>Use of eco-friendly cleaning solutions</li>
                    </ul>
                </>
            ),
            category: "House Cleaning",
            image: cleaningImg
        },

        // Bathroom Cleaning
        {
            id: 4,
            name: "Bathroom Cleaning",
            description: (
                <>
                    <p>
                        <i>Deep cleaning for bathrooms</i> to ensure hygiene and freshness.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Scrubbing sinks, tubs, and showers</li>
                        <li>Disinfecting toilets</li>
                        <li>Cleaning mirrors and fixtures</li>
                    </ul>
                </>
            ),
            category: "Bathroom Cleaning",
            image: cleaningImg
        },
        {
            id: 5,
            name: "Tile Scrubbing",
            description: (
                <>
                    <p>
                        <i>Intensive tile scrubbing</i> for a sparkling bathroom.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Removal of mold and mildew</li>
                        <li>Grout cleaning</li>
                        <li>Restoring shine to tiles</li>
                    </ul>
                </>
            ),
            category: "Bathroom Cleaning",
            image: cleaningImg
        },
        {
            id: 6,
            name: "Sanitizing Fixtures",
            description: (
                <>
                    <p>
                        <i>Sanitizing all bathroom fixtures</i> for a germ-free space.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Sinks and taps</li>
                        <li>Toilets and bidets</li>
                        <li>Showers and bathtubs</li>
                    </ul>
                </>
            ),
            category: "Bathroom Cleaning",
            image: cleaningImg
        },

        // Cooking
        {
            id: 7,
            name: "Cooking",
            description: (
                <>
                    <p>
                        <i>Home-cooked meals</i> tailored to your preferences.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Preparation of breakfast, lunch, and dinner</li>
                        <li>Special dietary requirements</li>
                        <li>Healthy and delicious recipes</li>
                    </ul>
                </>
            ),
            category: "Cooking",
            image: cleaningImg
        },
        {
            id: 8,
            name: "Meal Prep",
            description: (
                <>
                    <p>
                        <i>Efficient meal preparation</i> for busy households.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Chopping and marinating ingredients</li>
                        <li>Organizing kitchen workspace</li>
                        <li>Pre-cooking for the week</li>
                    </ul>
                </>
            ),
            category: "Cooking",
            image: cleaningImg
        },
        {
            id: 9,
            name: "Grocery Shopping",
            description: (
                <>
                    <p>
                        <i>Convenient grocery shopping</i> for all your kitchen needs.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Fresh produce selection</li>
                        <li>Buying pantry essentials</li>
                        <li>Ensuring quality and freshness</li>
                    </ul>
                </>
            ),
            category: "Cooking",
            image: cleaningImg
        },

        // Laundry
        {
            id: 10,
            name: "Laundry",
            description: (
                <>
                    <p>
                        <i>Complete laundry care</i> for your garments.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Washing and drying clothes</li>
                        <li>Ironing and folding</li>
                        <li>Use of gentle detergents</li>
                    </ul>
                </>
            ),
            category: "Laundry",
            image: cleaningImg
        },
        {
            id: 11,
            name: "Folding Clothes",
            description: (
                <>
                    <p>
                        <i>Neat folding and organizing</i> for a tidy wardrobe.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Sorting by type and size</li>
                        <li>Arranging in drawers and shelves</li>
                        <li>Special care for delicate fabrics</li>
                    </ul>
                </>
            ),
            category: "Laundry",
            image: cleaningImg
        },
        {
            id: 12,
            name: "Dry Cleaning Pickup",
            description: (
                <>
                    <p>
                        <i>Hassle-free dry cleaning pickup and delivery</i>.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Timely collection and drop-off</li>
                        <li>Safe handling of garments</li>
                        <li>Coordination with local dry cleaners</li>
                    </ul>
                </>
            ),
            category: "Laundry",
            image: cleaningImg
        },

        // Utensil Washing
        {
            id: 13,
            name: "Utensil Washing",
            description: (
                <>
                    <p>
                        <i>Thorough cleaning of kitchen utensils</i> for a hygienic cooking space.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Scrubbing pots, pans, and dishes</li>
                        <li>Removing tough stains and grease</li>
                        <li>Use of safe cleaning agents</li>
                    </ul>
                </>
            ),
            category: "Utensil Washing",
            image: cleaningImg
        },
        {
            id: 14,
            name: "Dish Drying",
            description: (
                <>
                    <p>
                        <i>Careful drying and organizing of dishes</i> to prevent water spots.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Air and towel drying</li>
                        <li>Arranging dishes in cabinets</li>
                        <li>Ensuring complete dryness</li>
                    </ul>
                </>
            ),
            category: "Utensil Washing",
            image: cleaningImg
        },
        {
            id: 15,
            name: "Cutlery Polishing",
            description: (
                <>
                    <p>
                        <i>Polishing and organizing cutlery</i> for a sparkling finish.
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Removing tarnish and stains</li>
                        <li>Sorting by type</li>
                        <li>Arranging in drawers and holders</li>
                    </ul>
                </>
            ),
            category: "Utensil Washing",
            image: cleaningImg
        },
    ];

    const categories = [
        { id: 1, name: "House Cleaning" },
        { id: 2, name: "Bathroom Cleaning" },
        { id: 3, name: "Cooking" },
        { id: 4, name: "Laundry" },
        { id: 5, name: "Utensil Washing" },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-red-900 mb-8">All Services</h1>

                {categories.map((category) => (
                    <div key={category.id} className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {services
                                .filter((service) => service.category === category.name)
                                .map((service) => (
                                    <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3 className="text-lg font-semibold">{service.name}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
