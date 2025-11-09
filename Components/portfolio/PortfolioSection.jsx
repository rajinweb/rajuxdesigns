'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { projects } from "@/data/projects";

const categories = [
  "All",
  "Web Design",
  "Digital Ads",
  "Mobile App",
  "Product Design",
  "Branding",
  "Research",
  "Strategy"
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getGridClass = (project, index) => {
    if (project.featured) {
      return "md:col-span-2 md:row-span-2";
    }
    return "col-span-1";
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">My Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Explore my portfolio of design projects across various domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 bg-white shadow-sm max-w-5xl mx-auto mb-12 p-2">
          {categories.map((category) => (
            <button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 min-w-[50px] max-w-[200px] rounded-md px-4 py-2 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                  : "hover:bg-gray-100"
              }`}
              
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/ProjectDetails/${project.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 mb-4">
                      <div className="aspect-4/3 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2937] mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{project.tagline}</p>
                      {project.year && (
                        <p className="text-gray-400 text-xs mt-2">{project.year}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}