import React from "react";
import { motion } from "framer-motion";
import { Palette, Monitor, Smartphone, Zap, Target, Layers } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Creating memorable brand identities that tell your story",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Responsive websites that engage and convert visitors",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "User-friendly mobile apps with intuitive interfaces",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "UX Strategy",
    description: "Research-driven design decisions that improve user experience",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Designs that drive results and achieve business goals",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Scalable design systems for consistent brand experiences",
    color: "from-violet-500 to-purple-500"
  }
];

const tools = [
  { name: "Figma", proficiency: 95 },
  { name: "Adobe Creative Suite", proficiency: 90 },
  { name: "Sketch", proficiency: 85 },
  { name: "Webflow", proficiency: 80 },
  { name: "Framer", proficiency: 75 },
  { name: "Principle", proficiency: 70 }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional design solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${skill.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools & Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <span className="font-medium text-gray-900">{tool.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{tool.proficiency}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}