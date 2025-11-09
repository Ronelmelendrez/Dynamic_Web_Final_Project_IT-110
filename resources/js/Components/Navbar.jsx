import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-space-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <FaRocket className="text-cosmic-purple text-2xl" />
                        <span className="font-display text-2xl font-bold gradient-text">
                            Beyond Earth
                        </span>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Story', 'Gallery', 'Mars', 'Earth', 'Favorites'].map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-white/80 hover:text-white font-medium transition-colors"
                            >
                                {item}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('feedback')}
                            className="btn-primary"
                        >
                            Join Mission
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
