'use client'
import { projects } from "@/data/projects";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft,User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function ProjectDetails() {
  const navigate = useRouter()
  const { id: projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = project?.images?.map((image: any) => ({ src: image })) || [];
  const coverImage = project ? { src: project.image } : null;
  const allImages = coverImage ? [coverImage, ...images] : images;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <button onClick={() =>navigate.replace("/")} className="flex">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button 
            onClick={() =>navigate.replace("/")}
            className="mb-8 group flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.year && (
              <span className="text-gray-500 text-sm">{project.year}</span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6">
            {project.title}
          </h1>
          
          {project.tagline && (
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {project.tagline}
            </p>
          )}

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 text-sm">
            {project.client && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Client:</span>
                <span className="font-medium text-gray-900">{project.client}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Role:</span>
                <span className="font-medium text-gray-900">{project.role}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-2xl cursor-pointer"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          />
        </motion.div>

        {/* Project Content */}
        <div className="prose prose-lg max-w-none">
          {project.overview && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.overview}
              </p>
            </motion.section>
          )}

          {project.challenge && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.challenge}
              </p>
            </motion.section>
          )}

          {project.solution && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">The Solution</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.solution}
              </p>
            </motion.section>
          )}

          {/* Additional Images */}
          {project.images && project.images.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image:any, imgIndex:number) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${project.title} - Image ${imgIndex + 1}`}
                    className="w-full rounded-xl shadow-lg cursor-pointer"
                    onClick={() => {
                      setIndex(imgIndex + 1);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>
            </motion.section>
          )}

          {project.impact && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Impact</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.impact}
              </p>
            </motion.section>
          )}

          {/* Tools Used */}
          {project.tools && project.tools.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.section>
          )}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={allImages}
          index={index}
        />
      </div>
    </div>
  );
}