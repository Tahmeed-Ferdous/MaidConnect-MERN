import { useState, useEffect } from 'react';

const useCredential = () => {
    const id = localStorage.getItem('uid');
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [slots, setSlots] = useState([]);
    const [services, setServices] = useState([]);

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

    // Fetch slots (list of slots)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/slots"); // Correct endpoint for list
                const result = await response.json();
                if (result.status) {
                    setSlots(result.slots);
                } else {
                    console.log(result);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // Fetch services (aligning with CreateService)
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

    return { user, setUser, users, setUsers, categories, setCategories, slots, setSlots, services, setServices, logout };
};

export default useCredential;
