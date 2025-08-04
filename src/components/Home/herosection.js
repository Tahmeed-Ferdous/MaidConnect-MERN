import React from "react";
import coverImage from "../../images/cover.jpeg";
import serviceImage from "../../images/services.jpg";
import teamImage from "../../images/team.jpg";
import logoImage from "../../images/logo.png"; // Add your logo image

const HeroSection = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    width: "100%",
                    height: "60vh",
                    backgroundImage: `url(${coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="hero-section"
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                    }}
                >
                    Welcome to MaidConnect
                </div>
            </div>

            {/* Section 1: Our Services */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px 0",
                    background: "#f7f7f7",
                }}
            >
                <img
                    src={serviceImage}
                    alt="Our Services"
                    style={{
                        width: "400px",
                        height: "auto",
                        borderRadius: "16px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        marginRight: "40px",
                    }}
                />
                <div>
                    <h2 style={{ fontSize: "2rem", marginBottom: "16px", color: "#333" }}>
                        Professional Maid Services
                    </h2>
                    <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "500px" }}>
                        At MaidConnect, we connect you with trusted, experienced maids for all your household needs. From daily cleaning to deep sanitization, our services are tailored to make your life easier and your home sparkling clean.
                    </p>
                </div>
            </div>

            {/* Section 2: Our Team */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "60px 0",
                    background: "#fff",
                    flexDirection: "row-reverse",
                }}
            >
                <img
                    src={teamImage}
                    alt="Our Team"
                    style={{
                        width: "400px",
                        height: "auto",
                        borderRadius: "16px",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                        marginLeft: "40px",
                    }}
                />
                <div>
                    <h2 style={{ fontSize: "2rem", marginBottom: "16px", color: "#333" }}>
                        Trusted & Experienced Team
                    </h2>
                    <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "500px" }}>
                        Our team is carefully vetted and trained to deliver the highest standards of service. We value reliability, professionalism, and customer satisfaction, ensuring you always get the best care for your home.
                    </p>
                </div>
            </div>

            {/* Simple Footer */}
            <footer
                style={{
                    background: "#222",
                    color: "#fff",
                    padding: "32px 0",
                    textAlign: "center",
                    marginTop: "40px",
                }}
            >
                <img
                    src={logoImage}
                    alt="MaidConnect Logo"
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        marginBottom: "16px",
                    }}
                />
                <h3 style={{ margin: "8px 0", fontSize: "1.5rem" }}>MaidConnect</h3>
                <p style={{ maxWidth: "400px", margin: "0 auto 12px", fontSize: "1rem", color: "#ccc" }}>
                    Connecting you with trusted, professional maids for a cleaner, happier home.
                </p>
                <span style={{ fontWeight: "bold", color: "#f7c948" }}>Home Services Platform</span>
            </footer>
        </div>
    );
};

export default HeroSection;