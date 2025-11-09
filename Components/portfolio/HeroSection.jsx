import{ useState, useEffect } from "react";
import {  Sparkles, Zap, Palette, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div 
          className="absolute w-96 h-96 bg-linear-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
          style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-linear-to-r from-amber-400 to-orange-500 rounded-full opacity-15 blur-3xl"
          style={{
            right: (100 - mousePosition.x * 0.015) + '%',
            bottom: (100 - mousePosition.y * 0.015) + '%',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Floating Icons */}
          <div className="relative mb-16">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-16 left-1/4 text-blue-500"
            >
              <Palette className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-12 right-1/4 text-amber-500"
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -top-8 left-3/4 text-purple-500"
            >
              <Zap className="w-7 h-7" />
            </motion.div>
          </div>

           <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="">Product Designer & Creative Thinker</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#1F2937] mb-6 leading-tight text-gradient">
              Crafting Digital Product Users Love
            </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:text-2xl text-sm text-gray-600 mb-6 mx-auto leading-relaxed"
          >
            Transforming complex problems into intuitive, beautiful solutions.
            <br/><small className="underline">Bridging Design and Technology</small>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex  sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <button
              onClick={scrollToPortfolio}
              size="lg"
              className="rounded-md bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white md:px-8 px-6 py-3 md:text-lg text-sm glow-effect transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            
            <button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-md md:text-lg text-sm md:px-8 px-6 py-3"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">14+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">10</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">12+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
          </motion.div>
        </motion.div>

      
        
      </div>
       {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce"  onClick={scrollToPortfolio}>
          {/* <span className="text-sm absolute whitespace-nowrap left-1/2 -translate-x-1/2 -top-6">Scroll to explore</span> */}
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
            <ChevronDown className="text-gray-400 -mt-1"/>
        </div>
    </section>
  );
}