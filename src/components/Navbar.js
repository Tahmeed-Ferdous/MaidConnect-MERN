import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
    return (
        <nav
            className="navbar"
            style={{
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                padding: "0.5rem 0",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: "80px", height: "auto", marginRight: "12px" }}
                    />
                    <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#222" }}>
                        MaidConnect
                    </span>
                </Link>

                <div
                    className="nav-links"
                    style={{
                        display: "flex",
                        gap: "2rem",
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
                            transition: "background 0.2s",
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
                            transition: "background 0.2s",
                            background: isActive ? "#f0f7ff" : "transparent",
                        })}
                    >
                        Staffs
                    </NavLink>
                    <NavLink
                        to="/login"
                        style={({ isActive }) => ({
                            color: isActive ? "#1976d2" : "#222",
                            fontWeight: 500,
                            textDecoration: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            transition: "background 0.2s",
                            background: isActive ? "#f0f7ff" : "transparent",
                        })}
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;