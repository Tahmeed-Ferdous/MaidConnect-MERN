import { useState, useEffect } from 'react';

const useCredential = () => {
    const id = localStorage.getItem('uId');
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [slots, setSlots] = useState([]);
    const [services, setServices] = useState([]);
    const [staffs, setStaffs] = useState([]);

    // ----------------------------------------
    const [service, setService] = useState({});
    const [staff, setStaff] = useState({});
    const [slot, setSlot] = useState({});
    const [bookingsByEmail, setBookingsByEmail] = useState([]);
    const [bookings, setBookings] = useState([]);


    // Persist Login
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/user/${id}`);
                    const result = await response.json();
                    setUser(result.user);
                } catch (err) {
                    console.error("Failed to fetch user:", err);
                }
            };
            fetchData();
        } else {
            setUser({});
        }
    }, [id]);

    // Logout
    const logout = () => {
        localStorage.removeItem('uid');
        setUser({});
    };

    // Fetch all users
    useEffect(() => {
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
    }, []);

    // Fetch categories
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/categories");
                const result = await response.json();
                if (result.status) {
                    setCategories(result.categories);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // Fetch slots
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/slots"); // Correct endpoint for list
                const result = await response.json();
                if (result.status) {
                    setSlots(result.slot);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // Fetch services
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/services"); // Correct endpoint for services
                const result = await response.json();
                if (result.status) {
                    setServices(result.services); // Store locally as well for use within this hook
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log("Error fetching services:", err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/staffs");
                const result = await response.json();
                if (result.status) {
                    setStaffs(result.staffs);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log("Error fetching services:", err);
            }
        };
        fetchData();
    }, []);

    // Fetch payments by admin
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/bookings`);
                const result = await response.json();
                if (result.status) {
                    setBookings(result.bookings);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log("Error fetching Bookings:", err);
            }
        };
        user.role === "admin" && fetchData();
    }, [user.role, user.email]);

    // Fetch payments by user
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/payments/${user.email}`);
                const result = await response.json();
                if (result.status) {
                    setBookingsByEmail(result.payments);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log("Error fetching Bookings:", err);
            }
        };
        user.role === "user" && fetchData();
    }, [user.role, user.email]);

    return { slot, setSlot, staff, setStaff, service, setService, user, setUser, users, setUsers, categories, setCategories, slots, setSlots, services, setServices, staffs, setStaffs, logout, bookingsByEmail, bookings };
};

export default useCredential;
