import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

// Earth sphere component
function EarthSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#2563eb"
        emissive="#1e40af"
        emissiveIntensity={0.2}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}

export default function InteractiveEarth({ epicImages, loading }) {
  return (
    <section
      id="earth"
      className="relative py-32 bg-gradient-to-b from-black/50 to-space-dark"
    >
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
            Our Pale Blue Dot
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See Earth as astronauts see it—a fragile oasis in the vast darkness
            of space. These images from NASA's EPIC camera show our planet in
            stunning detail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Earth Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card h-[500px] overflow-hidden"
          >
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center">
                  <div className="text-white/70">Loading 3D Earth...</div>
                </div>
              }
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars
                  radius={300}
                  depth={50}
                  count={5000}
                  factor={4}
                  saturation={0}
                  fade
                  speed={1}
                />
                <EarthSphere />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Earth Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">A New Perspective</h3>

            {[
              {
                title: "The Overview Effect",
                description:
                  "Astronauts describe a cognitive shift when seeing Earth from space—realizing our planet's fragility and the importance of protecting it.",
              },
              {
                title: "One Global Community",
                description:
                  "From space, borders disappear. We see one interconnected world, sharing the same atmosphere, oceans, and destiny.",
              },
              {
                title: "Our Cosmic Home",
                description:
                  "Earth is the only known planet with life. Every sunrise, every ocean, every breath of air is precious and worth preserving.",
              },
            ].map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="glass-card"
              >
                <h4 className="text-xl font-bold mb-2 text-cosmic-cyan">
                  {fact.title}
                </h4>
                <p className="text-white/70">{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EPIC Images Gallery */}
        {!loading && epicImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Earth from a Million Miles Away
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {epicImages.slice(0, 5).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden rounded-lg glass-card p-2"
                >
                  <img
                    src={image.image_url}
                    alt={`Earth - ${image.date}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
