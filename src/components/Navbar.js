import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth();
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);  // To track previous scroll position
    const [isNavbarVisible, setIsNavbarVisible] = useState(true); // To control navbar visibility

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user scrolls down or up
            if (window.scrollY > lastScrollY) {
                setIsNavbarVisible(false); // Hide navbar on scroll down
            } else {
                setIsNavbarVisible(true); // Show navbar on scroll up
            }

            setLastScrollY(window.scrollY); // Update last scroll position
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]); // Effect depends on the last scroll position

    return (
        <nav
            className="navbar"
            style={{
                background: "#fff",
                boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1)`,
                position: "sticky",
                top: 0,
                zIndex: 1000,
                padding: "1rem 2rem",
                transition: "transform 0.3s ease-out",
                transform: isNavbarVisible ? "translateY(0)" : "translateY(-100%)", // Hide when scrolling down
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Logo Section */}
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "80px",
                            height: "auto",
                            marginRight: "16px",
                        }}
                    />
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            color: "#222",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        MaidConnect
                    </span>
                </Link>

                {/* Nav Links Section */}
                <div
                    className="nav-links"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}
                >
                    <NavLink
                        to="/services"
                        style={({ isActive }) => ({
                            color: isActive ? "#1976d2" : "#222",
                            fontWeight: 500,
                            textDecoration: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            transition: "background 0.3s",
                            background: isActive ? "#f0f7ff" : "transparent",
                        })}
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/staff"
                        style={({ isActive }) => ({
                            color: isActive ? "#1976d2" : "#222",
                            fontWeight: 500,
                            textDecoration: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            transition: "background 0.3s",
                            background: isActive ? "#f0f7ff" : "transparent",
                        })}
                    >
                        Staffs
                    </NavLink>

                    {user.email ? (
                        <>
                            {user.role === "user" && (
                                <NavLink
                                    to="/dashboard"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#1976d2" : "#222",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        transition: "background 0.3s",
                                        background: isActive ? "#f0f7ff" : "transparent",
                                    })}
                                >
                                    Dashboard
                                </NavLink>
                            )}

                            {user.role === "admin" && (
                                <NavLink
                                    to="/admin"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#1976d2" : "#222",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        transition: "background 0.3s",
                                        background: isActive ? "#f0f7ff" : "transparent",
                                    })}
                                >
                                    Admin
                                </NavLink>
                            )}

                            {user.role === "staff" && (
                                <NavLink
                                    to="/staffdashboard"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#1976d2" : "#222",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        padding: "8px 16px",
                                        borderRadius: "6px",
                                        transition: "background 0.3s",
                                        background: isActive ? "#f0f7ff" : "transparent",
                                    })}
                                >
                                    Staff
                                </NavLink>
                            )}
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            style={({ isActive }) => ({
                                color: isActive ? "#1976d2" : "#222",
                                fontWeight: 500,
                                textDecoration: "none",
                                padding: "8px 16px",
                                borderRadius: "6px",
                                transition: "background 0.3s",
                                background: isActive ? "#f0f7ff" : "transparent",
                            })}
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
