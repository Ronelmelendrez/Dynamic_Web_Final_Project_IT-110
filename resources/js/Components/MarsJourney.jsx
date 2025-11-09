import React from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function MarsJourney({ marsPhotos, loading }) {
  if (loading) {
    return null;
  }

  return (
    <section id="mars" className="relative py-32 overflow-hidden">
      {/* Mars-themed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-900/20 to-black/50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full mb-6">
            <FaRocket className="text-red-400" />
            <span className="text-sm text-red-300">Mars Exploration</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Journey to the Red Planet
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Step onto the surface of Mars through the eyes of NASA's Curiosity
            Rover. These aren't just photos—they're postcards from another
            world.
          </p>
        </motion.div>

        {/* Mars Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {marsPhotos.slice(0, 12).map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative group"
            >
              <div className="aspect-square overflow-hidden rounded-lg glass-card p-2">
                <img
                  src={photo.img_src}
                  alt={`Mars - ${photo.camera.full_name}`}
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Overlay with info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-lg flex flex-col justify-end p-4"
                >
                  <p className="text-white text-xs font-semibold">
                    {photo.camera.full_name}
                  </p>
                  <p className="text-white/60 text-xs">Sol {photo.sol}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              label: "Distance from Earth",
              value: "225M km",
              color: "from-red-500 to-orange-500",
            },
            {
              label: "Mission Duration",
              value: "11+ Years",
              color: "from-orange-500 to-yellow-500",
            },
            {
              label: "Photos Captured",
              value: "700K+",
              color: "from-yellow-500 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card text-center"
            >
              <div
                className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
