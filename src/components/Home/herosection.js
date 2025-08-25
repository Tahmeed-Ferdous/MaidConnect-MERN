import React, { useState, useEffect, useRef } from "react";

const MaidConnect3D = () => {
    const [scrollY, setScrollY] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden" ref={containerRef}>
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div 
                    className="absolute w-96 h-96 bg-gradient-to-r from-black/5 to-transparent rounded-full blur-3xl"
                    style={{
                        transform: `translate3d(${mousePosition.x * 100}px, ${mousePosition.y * 100}px, 0) rotate(${scrollY * 0.1}deg)`,
                        top: '20%',
                        left: '10%'
                    }}
                />
                <div 
                    className="absolute w-64 h-64 bg-gradient-to-l from-black/3 to-transparent rounded-full blur-2xl"
                    style={{
                        transform: `translate3d(${-mousePosition.x * 150}px, ${-mousePosition.y * 150}px, 0) rotate(${-scrollY * 0.15}deg)`,
                        top: '60%',
                        right: '15%'
                    }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center perspective-1000">
                {/* 3D Rotating Hero Card */}
                <div 
                    className="relative w-full max-w-6xl mx-auto px-6"
                    style={{
                        transform: `rotateX(${scrollY * 0.05}deg) rotateY(${mousePosition.x * 5}deg) translateZ(${50 - scrollY * 0.1}px)`,
                        transformStyle: 'preserve-3d',
                        marginTop: "-100px"
                    }}
                >
                    {/* Main Hero Content */}
                    <div 
                        className="text-center transform transition-all duration-700"
                        style={{
                            transform: `translateY(${scrollY * -0.3}px) scale(${1 - scrollY * 0.0005})`,
                            opacity: Math.max(0, 1 - scrollY * 0.002)
                        }}
                    >
                        {/* Animated Logo */}
                        <div 
                            className="w-24 h-24 mx-auto mb-8 relative"
                            style={{
                                transform: `rotate(${scrollY * 0.2}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`
                            }}
                        >
                            <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center shadow-2xl">
                                <span className="text-white text-2xl font-bold">MC</span>
                            </div>
                            <div className="absolute inset-0 bg-black rounded-2xl opacity-20 blur-xl transform rotate-6"></div>
                        </div>

                        <h1 
                            className="text-7xl md:text-8xl font-light tracking-widest mb-8 text-black break-words"
                            style={{
                                transform: `perspective(800px) rotateX(${scrollY * 0.02}deg)`,
                                textShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                wordBreak: "break-word" // Ensure text fits within its container
                            }}
                        >
                            <span 
                                className="block"
                                style={{
                                    transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 10}px)`
                                }}
                            >
                                MAID CONNECT
                            </span>
                        </h1>
                        
                        <p 
                            className="text-xl md:text-2xl font-light tracking-wide mb-12 text-gray-600 max-w-3xl mx-auto break-words"
                            style={{
                                transform: `translateY(${scrollY * -0.1}px)`,
                                opacity: Math.max(0, 1 - scrollY * 0.003)
                            }}
                        >
                            Professional cleaning services with cutting-edge technology
                        </p>

                        {/* 3D Search Bar */}
                        <div 
                            className="relative max-w-lg mx-auto"
                            style={{
                                transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg) translateZ(${20 - scrollY * 0.05}px)`,
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <div className="flex bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                                <input
                                    type="text"
                                    placeholder="What service do you need?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 px-6 py-4 text-black border-none outline-none text-base bg-transparent break-words"
                                />
                                
                                <button
                                    onClick={handleSearch}
                                    className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 font-medium tracking-wider transform hover:scale-105 active:scale-95"
                                >
                                    SEARCH
                                </button>
                            </div>
                            <div className="absolute inset-0 bg-black/5 rounded-2xl blur-2xl transform translate-y-4 -z-10"></div>
                        </div>
                    </div>

                    {/* Floating Action Indicators */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <div 
                            className="w-6 h-10 border-2 border-black rounded-full flex justify-center animate-pulse"
                            style={{
                                transform: `translateY(${Math.sin(Date.now() * 0.003) * 10}px)`
                            }}
                        >
                            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div 
                        className="text-center mb-20"
                        style={{
                            transform: `perspective(1000px) rotateX(${(scrollY - 500) * 0.02}deg) translateY(${Math.max(0, (scrollY - 500) * -0.3)}px)`,
                            opacity: Math.min(1, Math.max(0, (scrollY - 300) / 300))
                        }}
                    >
                        <h2 className="text-6xl font-light tracking-wider text-black mb-6">
                            OUR SERVICES
                        </h2>
                        <div 
                            className="w-32 h-1 bg-black mx-auto rounded-full"
                            style={{
                                transform: `scaleX(${Math.min(1, Math.max(0, (scrollY - 400) / 200))})`
                            }}
                        ></div>
                    </div>
                    
                    {/* 3D Services Grid */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Service Card */}
                        <div 
                            className="relative group"
                            style={{
                                transform: `perspective(1000px) rotateY(${(scrollY - 600) * 0.05}deg) translateX(${Math.max(-100, (scrollY - 600) * 0.2)}px)`,
                                transformStyle: 'preserve-3d',
                                opacity: Math.min(1, Math.max(0, (scrollY - 500) / 300))
                            }}
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-light tracking-wide text-black mb-6 break-words">
                                        PROFESSIONAL CLEANING
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed font-light mb-8 break-words">
                                        Connect with trusted, experienced professionals for all your household needs. 
                                        From daily maintenance to deep sanitization, our services make your life easier.
                                    </p>
                                    
                                    {/* Animated Service List */}
                                    <div className="space-y-4">
                                        {[ 
                                            "Regular House Cleaning", 
                                            "Deep Cleaning Services", 
                                            "Move-in/Move-out Cleaning"
                                        ].map((service, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                                                style={{
                                                    transform: `translateX(${Math.max(-50, (scrollY - 700 - index * 100) * 0.1)}px)`,
                                                    opacity: Math.min(1, Math.max(0, (scrollY - 600 - index * 100) / 200))
                                                }}
                                            >
                                                <div className="w-3 h-3 bg-black rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-300"></div>
                                                <span className="text-gray-700 break-words">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Service Image */}
                        <div 
                            className="relative"
                            style={{
                                transform: `perspective(1000px) rotateY(${(scrollY - 600) * -0.03}deg) translateX(${Math.min(100, -(scrollY - 600) * 0.15)}px)`,
                                transformStyle: 'preserve-3d',
                                opacity: Math.min(1, Math.max(0, (scrollY - 600) / 300))
                            }}
                        >
                            <div className="relative group">
                                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl transform group-hover:rotate-2 transition-all duration-500 flex items-center justify-center">
                                    <div className="text-6xl text-gray-400">🏠</div>
                                </div>
                                <div className="absolute inset-0 bg-black/10 rounded-3xl blur-2xl transform translate-y-4 group-hover:translate-y-6 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <footer 
                className="bg-black text-white py-20 relative overflow-hidden"
                style={{
                    transform: `perspective(1000px) rotateX(${(scrollY - 1800) * 0.01}deg)`
                }}
            >
                {/* Animated Background Pattern */}
                <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, white 0%, transparent 50%)`
                    }}
                ></div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    {/* Animated Logo */}
                    <div 
                        className="w-20 h-20 mx-auto mb-8 relative"
                        style={{
                            transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.002) * 0.05})`
                        }}
                    >
                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                            <span className="text-black text-xl font-bold">MC</span>
                        </div>
                    </div>
                    
                    <h3 
                        className="text-4xl font-light tracking-widest mb-8"
                        style={{
                            transform: `perspective(800px) rotateX(${(scrollY - 1800) * 0.01}deg)`
                        }}
                    >
                        MAIDCONNECT
                    </h3>
                    
                    <div className="w-24 h-0.5 bg-white mx-auto mb-8 rounded-full"></div>
                    
                    <p className="text-gray-300 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto break-words">
                        Connecting you with trusted professionals for a cleaner, happier home
                    </p>
                    
                    <div 
                        className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-400 uppercase tracking-wider"
                        style={{
                            opacity: Math.min(1, Math.max(0, (scrollY - 1900) / 200))
                        }}
                    >
                        <span>Home Services Platform</span>
                        <span className="hidden sm:block">•</span>
                        <span>Professional • Reliable • Trusted</span>
                    </div>
                </div>
            </footer>

            {/* Custom Styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default MaidConnect3D;
