import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink opacity-10" />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center">
              <FaRocket className="text-4xl text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Ready to Explore More?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            This is just the beginning of your cosmic journey. Join thousands of
            space enthusiasts discovering the wonders of the universe through
            data, imagery, and stories that inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="https://api.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Get NASA API Key</span>
              <FaArrowRight />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("hero")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              Start Over
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20">
            {[
              { value: "50+", label: "NASA Datasets" },
              { value: "1M+", label: "Images Available" },
              { value: "100%", label: "Free & Open" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
