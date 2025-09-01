import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../Booking/BookingModal';
import useAuth from '../../hooks/useAuth';

const StaffMiniCard = ({ staff }) => {
    const navigate = useNavigate();
    const [isModalOpen, setModelOpen] = useState(false);
    const {setStaff, setSlot} = useAuth();

    const openModal = () => {
        setStaff(staff);
        setModelOpen(true);
    };
    const closeModal = () => {
    
        setModelOpen(false);
        setSlot({});
        setStaff({});
    };

    return (
        <div>
            <div
                key={staff._id}
                className="
                    bg-white shadow-lg rounded-lg p-4 border border-gray-200
                    transform transition-all duration-300 ease-in-out
                    hover:shadow-xl hover:scale-102
                    cursor-pointer
                "
            >
                <img
                    src={staff.image}
                    alt={staff.name}
                    className="
                        w-full h-48 object-cover rounded mb-4
                        transition-all duration-300 ease-in-out
                        hover:scale-105 hover:brightness-110
                    "
                />
                <h3 className="text-lg font-semibold text-black">{staff.name}</h3>
                <p className="text-sm text-gray-600">{staff.role}</p>
                <p className="text-sm text-gray-600">{staff.location}</p>
                <p className="mt-2 text-gray-700 text-sm">{staff.bio}</p>
                <p className="mt-1 text-sm font-medium text-gray-800">Experience: {staff.experience}</p>
                <p className="mt-2 text-lg font-bold text-black">
                    Rate: {staff.rate} /hr
                </p>
                <div className="flex gap-3 mt-4">
                    <button onClick={openModal} className="
                        bg-white text-black px-4 py-2 rounded shadow 
                        border-2 border-black hover:bg-black hover:text-white 
                        transition-all duration-200
                    ">
                        Book Now
                    </button>
                    <button onClick={() => {
                        navigate(`/staff-details/${staff._id}`)
                    }} className="
                        bg-black text-white px-4 py-2 rounded shadow 
                        hover:bg-white hover:text-black border-2 border-black
                        transition-all duration-200
                    ">
                        View Profile
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="flex justify-between items-center p-4">
                    <h3 className="text-lg font-semibold text-gray-900">Available service slots</h3>
                    <button
                        onClick={closeModal}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 flex justify-center items-center"
                    >
                        {/* Cross icon using Heroicons */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </BookingModal>
        </div>
    );
};
export default StaffMiniCard;
