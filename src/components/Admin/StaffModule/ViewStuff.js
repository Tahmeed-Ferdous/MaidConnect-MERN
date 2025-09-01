import React from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const ViewStaff = () => {
  const { staffs, setStaffs } = useAuth();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/staff/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.status) {
        toast.success(`${result.message}`);
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:5000/staffs");
            const result = await response.json();
            if (result.status) {
              setStaffs(result.staffs); // Update the staff list
            } else {
              console.log(result);
            }
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }

    } catch (err) {
      console.log(err);
    }
  };

  const loading = staffs === undefined || staffs.length === 0;

  return (
    <div className="overflow-x-auto my-5 p-2">
      <table className="table-auto w-full bg-white border border-gray-200">
        <thead className="bg-white border-b sticky top-0 z-10">
          <tr>
            <th className="text-sm font-medium text-gray-900 p-3 text-left w-10">#</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left w-40">Name</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left w-40">Location</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left w-32">Image</th>
            <th className="text-sm font-medium text-gray-900 p-3 text-left w-32">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-500">
                Loading staff...
              </td>
            </tr>
          ) : staffs.length > 0 ? (
            staffs.map((staff, index) => (
              <tr key={staff._id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-700">{index + 1}</td>
                <td className="p-3 text-sm text-gray-700 truncate">{staff.name}</td>
                <td className="p-3 text-sm text-gray-700">{staff.location}</td>
                <td className="p-3 text-sm text-gray-700">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <button
                    onClick={() => handleDelete(staff._id)}
                    className="p-2 hover:bg-red-100 rounded-md transition-colors duration-200 cursor-pointer group"
                    title="Delete staff"
                  >
                    <svg
                      className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 456 511.82"
                    >
                      <path fill="#FD3B3B" d="M48.42 140.13h361.99c17.36 0 29.82 9.78 28.08 28.17l-30.73 317.1c-1.23 13.36-8.99 26.42-25.3 26.42H76.34c-13.63-.73-23.74-9.75-25.09-24.14L20.79 168.99c-1.74-18.38 9.75-28.86 27.63-28.86zM24.49 38.15h136.47V28.1c0-15.94 10.2-28.1 27.02-28.1h81.28c17.3 0 27.65 11.77 27.65 28.01v10.14h138.66c.57 0 1.11.07 1.68.13 10.23.93 18.15 9.02 18.69 19.22.03.79.06 1.39.06 2.17v42.76c0 5.99-4.73 10.89-10.62 11.19-.54 0-1.09.03-1.63.03H11.22c-5.92 0-10.77-4.6-11.19-10.38 0-.72-.03-1.47-.03-2.23v-39.5c0-10.93 4.21-20.71 16.82-23.02 2.53-.45 5.09-.37 7.67-.37zm83.78 208.38c-.51-10.17 8.21-18.83 19.53-19.31 11.31-.49 20.94 7.4 21.45 17.57l8.7 160.62c.51 10.18-8.22 18.84-19.53 19.32-11.32.48-20.94-7.4-21.46-17.57l-8.69-160.63zm201.7-1.74c.51-10.17 10.14-18.06 21.45-17.57 11.32.48 20.04 9.14 19.53 19.31l-8.66 160.63c-.52 10.17-10.14 18.05-21.46 17.57-11.31-.48-20.04-9.14-19.53-19.32l8.67-160.62zm-102.94.87c0-10.23 9.23-18.53 20.58-18.53 11.34 0 20.58 8.3 20.58 18.53v160.63c0 10.23-9.24 18.53-20.58 18.53-11.35 0-20.58-8.3-20.58-18.53V245.66z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center text-gray-500">
                No staff found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStaff;
