import React from 'react';
import useAuth from '../../hooks/useAuth';

const PaymentsHistory = () => {
  const bookingsByEmail = useAuth();  // Your useAuth hook that fetches data

  console.log(bookingsByEmail);  // Confirm data is correctly fetched

  return (
    <div className="overflow-auto my-5 max-h-80 p-2">
      <table className="min-w-full border relative">
        <thead className="bg-white border-b sticky -top-3">
          <tr>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">Trx Id</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">Staff</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">Rate</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingsByEmail.length > 0 ? (
            bookingsByEmail.map((booking, index) => (
              <tr key={booking._id} className="odd:bg-gray-100 even:bg-white border-b">
                <td className="text-sm font-light p-3 whitespace-nowrap">{booking.trx_id}</td>
                <td className="text-sm font-light p-3 whitespace-nowrap">{booking.staff.name}</td>
                <td className="text-sm font-light p-3 whitespace-nowrap">{booking.staff.rate}</td>
                <td className="text-sm font-light p-3 whitespace-nowrap">{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-3 text-gray-500">No bookings available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsHistory;
