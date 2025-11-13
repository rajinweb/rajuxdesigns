import { motion } from "framer-motion";
import {skillsDetails, skills, tools} from '@/data/skills';

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
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional design solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
          {skillsDetails.map((skill, index) => (
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
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
        {/* CTA Section */}
      <section className="px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 md:p-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have a project in mind? I'd love to hear about it.
          </p>
          <a href={`mailto:hello@example.com`}>
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-xl transition-shadow duration-300">
              Get In Touch
            </button>
          </a>
        </motion.div>
      </section>
        {/* Tools & Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-sm"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between p-3  bg-gray-50 rounded-xl"
              >
                <span className="font-medium text-gray-900">{tool.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
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