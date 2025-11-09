import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarField from './StarField';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            {/* Animated Star Background */}
            <StarField />
            
            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
