import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaRocket } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-space-dark to-black border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaRocket className="text-cosmic-purple text-3xl" />
              <span className="font-display text-2xl font-bold gradient-text">
                Beyond Earth
              </span>
            </div>
            <p className="text-white/60 mb-4">
              A cinematic journey through space, powered by NASA's incredible
              data. Explore the cosmos and discover the wonders of our universe.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaLinkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/60 hover:text-cosmic-purple transition-colors"
                >
                  <Icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                "Story",
                "Gallery",
                "Mars Journey",
                "Earth View",
                "Favorites",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/60 hover:text-cosmic-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {["NASA API", "Documentation", "About", "Privacy", "Terms"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-cosmic-purple transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Beyond Earth. Powered by{" "}
            <a
              href="https://api.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-purple hover:underline"
            >
              NASA API
            </a>
            . Built with Laravel, React & Inertia.js
          </p>
        </div>
      </div>
    </footer>
  );
}
