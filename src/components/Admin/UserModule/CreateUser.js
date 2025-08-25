import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const CreateUser = () => {
    const { setUsers } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => processSignUp(data);

    const processSignUp = (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role
        };

        const btn = document.getElementById('signup_btn_admin');
        btn.innerText = 'Processing Registration ...';
        btn.disabled = true;

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();
                if (result.status) {
                    toast.success(`${result.message}`)
                    const fetchData = async () => {
                        try {
                            const response = await fetch("http://localhost:5000/users");
                            const result = await response.json();
                            if (result.status) {
                                setUsers(result.users);
                            } else {
                                console.log(result);
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    };
                    fetchData();
                }

                else {
                    toast.error(`${result.message}`);
                }
                document.getElementById('signup_form_admin').reset();
                btn.innerText = 'Register';
                btn.disabled = false;
            } catch (error) {
                fetchData();
            }
        };

        fetchData();
    };


    return (
        <form
            id="signup_form_admin"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-xl p-6 w-full h-auto border border-gray-200"
        >
            <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Create an Account
            </h1>

            {/* Name */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                    {...register("name", { required: true })}
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">Name required</span>
                )}
            </div>

            {/* Email */}
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="text-red-500 text-sm">Email required</span>
                )}
            </div>

            {/* Password */}
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Enter Password"
                    autoComplete="current-password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">Password required</span>
                )}
            </div>

            {/* Role */}
            <div className="mb-6">
                <select
                    {...register("role", { required: true })}
                    defaultValue=""
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none bg-white"
                >
                    <option value="" disabled>
                        Select User Role
                    </option>
                    <option value="user">User</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                </select>
                {errors.role && (
                    <span className="text-red-500 text-sm">Role required</span>
                )}
            </div>

            {/* Submit */}
            <button
                id="signup_btn_admin"
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
                Register
            </button>
        </form>
    );

};



export default CreateUser;