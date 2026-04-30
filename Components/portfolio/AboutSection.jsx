import { motion } from "framer-motion";
import { Award, Users, Coffee, Lightbulb } from "lucide-react";
import Image from "next/image";

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
        <div className="grid lg:grid-cols-2 gap-14 max-w-7xl mx-auto">
         <div className="relative md:max-h-[520px] max-h-[390px]overflow-hidden flex">
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="object-cover"
          >
              <Image
                alt="Rajesh Chaurasia"
                src="/images/rc-transparent.png"
                loading="lazy"
                width={425}
                height={587}
                className="relative -top-8 left-6 m-auto z-2"
                quality={75}
                title="Rajesh Chaurasia"
              />
            <Image
                alt=""
                src="/images/Hero_2.png"
                loading="lazy"
                width={500}
                height={500}
                className="absolute top-0 z-1"
                title="Curv Lines"
              />
                <Image
                alt="Design tool Illustrator"
                src="/images/Hero_3.png"
                loading="lazy"
                width={80}
                height={80}
                className="absolute bottom-0 z-2"
                title="Adobe Illustrator"
              />
              <Image
                alt="Design tool Photoshop"
                src="/images/Hero_4.png"
                loading="lazy"
                width={80}
                height={80}
                className="absolute right-0 top-0"
                title="Photoshop"
              />
              <Image
                alt="DesignToCodes"
                src="/images/Hero_5.png"
                loading="lazy"
                width={100}
                height={100}
                className="absolute top-50 right-0  z-2"
                title="Figma"
              /> 
               
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-32 h-32 bg-linear-to-br from-amber-500 to-orange-500 rounded-full opacity-80 blur-sm z-1"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-5 right-4 w-24 h-24 bg-linear-to-br from-blue-400 to-purple-500 rounded-full opacity-60 blur-sm z-2"
              ></motion.div>
       
                    {/* Achievements Grid 
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
            </div>*/}
            
          </motion.div>
          </div>
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
            I’m a product-focused Web Architect specializing in frontend development and product design within the MERN ecosystem. I build scalable, high-performance digital products from concept to production, with a strong focus on intuitive and visually engaging user experiences.

              <p>My core strength is translating complex business requirements into seamless, user-centric interfaces using React.js and Next.js, along with modern JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. I approach development with a design-first mindset—combining UX thinking and Figma-level design sensibilities with clean, production-ready code.</p>

              <p>While frontend and product design are my primary focus, I also bring solid backend experience, allowing me to contribute across the stack and collaborate effectively on end-to-end solutions.</p>

              <p>I’ve delivered impactful products across SaaS, AdTech, and enterprise platforms—improving performance, ensuring accessibility (WCAG standards), and driving user engagement.</p>

              <p>I thrive in agile, cross-functional teams, working closely with product managers, designers, and engineers to maintain design integrity and deliver high-quality products from discovery through deployment.</p>
            </div>

    
          </motion.div>
        </div>
      </div>
    </section>
  );
}