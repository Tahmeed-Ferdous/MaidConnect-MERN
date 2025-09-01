import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [bookingError, setBookingError] = useState("");
    const { slots, user, service, staff, slot, setSlot } = useAuth();

    const handleClose = () => {
        setBookingError("");
        onClose();
    };

    const bookNow = async () => {
        if (user && user.email) {
            if (slot && slot.label) {
                const btn = document.getElementById('pay_now');
                btn.innerText = "Processing Payment ...";
                btn.disabled = true;

                const trx_id = await generateTransactionId();

                const formData = {
                    date: new Date().toISOString().split("T")[0],
                    email: user.email,
                    name: user.name || '',
                    service: service || '',
                    staff: staff || '',
                    slot: slot,
                    trx_id,
                    status: 'pending'
                };

                console.log(formData); // Logging the entire formData object

                // Extract trx_id and amount from formData
                const amount = staff.rate || 0; // Assuming the amount is in `staff.rate`
                console.log(`Transaction ID: ${trx_id}, Amount: ${amount}`);

                // Trigger payNow with trx_id and amount
                payNow(amount, trx_id);

                // Booking API call (Optional for now)
                const fetchData = async () => {
                    try {
                        const response = await fetch(`http://localhost:5000/booking`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })
                        const result = await response.json()
                        if (result.status) {
                            console.log(result);
                            // If booking is successful, proceed with payment
                            payNow(amount, trx_id); // Triggering payment here as well
                        } else {
                            setBookingError(result.message);
                            btn.innerText = "Pay and Proceed";
                            btn.disabled = false;
                        }
                    } catch (err) {
                        fetchData();
                    }
                };
                fetchData();
            }
        } else {
            navigate('/login');
        }
    };

    async function generateTransactionId(prefix = "TX") {
        const timeStamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 9000) + 1000;
        const transactionId = `${prefix}-${timeStamp}-${randomNumber}`;
        return transactionId;
    }

    const payNow = (amount, trx_id) => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/pay/${amount}/${trx_id}`);
                const result = await response.json();
                if (result.status) {
                    window.location.replace(`${result.payment_link}`);
                } else {
                    console.log(result);
                }
            } catch (err) {
                fetchData();
            }
        };
        fetchData();
    };

    return (
        <div
            className={`fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto transition-opacity duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
        >
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="relative bg-white rounded-lg w-96 max-h-screen overflow-y-auto shadow-lg">
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 text-sm">Select your desired slot</p>
                        <button
                            onClick={handleClose}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-2"
                        >
                            {/* Cross icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-rose-500 text-sm mt-2">{bookingError}</p>

                    {/* Render slots */}
                    <ul className="space-y-4 mt-4 max-h-80 overflow-auto px-2">
                        {slots && slots.length > 0 ? (
                            slots.map((slot) => (
                                <li key={slot._id}>
                                    <input
                                        onChange={() => {
                                            setBookingError("");
                                            setSlot(slot);
                                        }}
                                        type="radio"
                                        id={`slot-${slot._id}`}
                                        name="slot"
                                        value={slot._id}
                                        className="absolute opacity-0 peer"
                                        required
                                    />
                                    <label
                                        htmlFor={`slot-${slot._id}`}
                                        className="inline-block w-full p-4 mb-2 text-center text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white hover:bg-gray-100"
                                    >
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{slot.label}</div>
                                            <div className="w-full text-gray-500">{slot.start_time} - {slot.end_time}</div>
                                        </div>
                                    </label>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500">No available slots</p>
                        )}
                    </ul>

                    <div className="mt-6">
                        <button
                            id="pay_now"
                            onClick={bookNow}
                            className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                        >
                            Pay and Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
