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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                Hi! I'm a passionate designer with over 3 years of experience creating 
                digital experiences that merge creativity with functionality. My journey 
                began with a love for visual storytelling and has evolved into crafting 
                comprehensive design solutions.
              </p>
              
              <p>
                I specialize in web design, brand identity, and user experience design. 
                My approach combines strategic thinking with creative execution to deliver 
                designs that not only look beautiful but also achieve business objectives.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring the latest design trends, 
                experimenting with new tools, or collaborating with amazing clients on 
                exciting projects that push creative boundaries.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                alt="Designer Portrait"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-80 blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-60 blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}