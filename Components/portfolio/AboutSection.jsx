import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Coffee, Lightbulb } from "lucide-react";

const achievements = [
  { icon: Award, label: "Design Awards", value: "12+" },
  { icon: Users, label: "Happy Clients", value: "25+" },
  { icon: Coffee, label: "Coffee Consumed", value: "500+" },
  { icon: Lightbulb, label: "Ideas Brought to Life", value: "50+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Hello, I’m Rajesh Chaurasia, a results-driven UI/UX and Product Designer & Developer with strong expertise in user experience design, front-end development, and product strategy.
              </p>
              <p>
               With extensive experience at Blis Media and 3Pillar Global, I’ve led cross-functional teams to deliver intuitive, high-performing digital products — from UX research and wireframing to front-end implementation using React, Next.js, JavaScript, and Tailwind CSS.
              </p>
              <p>
                My approach blends design thinking and technical execution to craft interfaces that are both visually compelling and functionally seamless. I thrive at the intersection of design and development, bridging the gap between user needs and business goals.
              </p>
              <p>
                Key focus areas include UX research, prototyping, accessibility, usability analysis, and product lifecycle management. I also collaborate with stakeholders to define roadmaps, optimize user flows, and ensure delivery of scalable, user-centric solutions.
              </p>
              <p>
                I’m always open to connecting with like-minded professionals and exploring opportunities where thoughtful design meets impactful technology.
              </p>
            </div>

    
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/rc.jpg"
                alt="Designer Portrait"
                className="w-1/2 object-cover rounded-full  m-auto"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-32 h-32 bg-linear-to-br from-amber-500 to-orange-500 rounded-full opacity-80 blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-8 w-32 h-32 bg-linear-to-br from-blue-400 to-purple-500 rounded-full opacity-60 blur-sm"
              ></motion.div>
            </div>
                    {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}