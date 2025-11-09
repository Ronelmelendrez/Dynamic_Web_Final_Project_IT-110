import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaStar, FaSpaceShuttle, FaGlobeAmericas } from 'react-icons/fa';

export default function StoryTimeline({ apodData, loading }) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);

    const timelineSteps = [
        {
            icon: FaStar,
            title: "The Dawn of Exploration",
            description: "From ancient stargazers to modern astronomers, humanity has always looked up in wonder.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: FaSpaceShuttle,
            title: "The Space Age Begins",
            description: "Breaking free from Earth's gravity, we ventured into the unknown, reaching for the stars.",
            color: "from-blue-400 to-purple-500"
        },
        {
            icon: FaGlobeAmericas,
            title: "A New Perspective",
            description: "Seeing Earth from space changed everything. We're one planet, one humanity, one destiny.",
            color: "from-green-400 to-cyan-500"
        }
    ];

    return (
        <section id="story" className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
                        Our Journey Through Time
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Every image tells a story. Every mission reveals a truth. 
                        This is humanity's adventure beyond the blue horizon.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cosmic-purple via-cosmic-blue to-transparent" />

                    {/* Timeline Steps */}
                    {timelineSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative mb-20 flex items-center ${
                                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                            }`}
                        >
                            {/* Content */}
                            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card"
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-4`}>
                                        <step.icon className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-white/70">{step.description}</p>
                                </motion.div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue border-4 border-space-dark" />

                            {/* Spacer */}
                            <div className="w-5/12" />
                        </motion.div>
                    ))}
                </div>

                {/* Featured APOD */}
                {!loading && apodData.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32"
                    >
                        <h3 className="text-4xl font-display font-bold text-center mb-12 gradient-text">
                            Today's Cosmic Wonder
                        </h3>
                        <div className="glass-card max-w-4xl mx-auto overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="relative overflow-hidden rounded-lg group">
                                    {apodData[0].media_type === 'image' ? (
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            src={apodData[0].url}
                                            alt={apodData[0].title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <iframe
                                            src={apodData[0].url}
                                            className="w-full h-full min-h-[300px]"
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-2xl font-bold mb-4">{apodData[0].title}</h4>
                                    <p className="text-white/70 mb-4">{apodData[0].explanation?.substring(0, 300)}...</p>
                                    <p className="text-sm text-white/50">{apodData[0].date}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
