'use client'; 
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rajuxdesigns@gmail.com",
    href: "mailto:rajuxdesigns@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 (638) 631-3937",
    href: "tel:+916386313937"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Delhi, India",
  
  }
];

const socialLinks = [
  // { name: "Dribbble", href: "#", color: "bg-pink-500" },
  // { name: "Behance", href: "#", color: "bg-blue-600" },
  // { name: "Instagram", href: "#", color: "bg-purple-500" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rajuxdesign/", color: "bg-blue-700" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
     if (loading) return; // prevent multiple submissions
    setLoading(true); // Set loading to true at the start of submission
    setStatus(null);
    try {
      debugger;
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent. We'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        console.log('Form submitted successfully', data);
      } else {
        setStatus({ ok: false, msg: data?.error || `Submission failed (${res.status})` });
        console.error('Submission failed', res.status, data);
      }
    } catch (error) {
      setStatus({ ok: false, msg: "Network error. Please try again." });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <section id="contact" className="py-20 bg-linear-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work <span className="text-blue-400">Together</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>
        </motion.div>

         <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name ?? ""}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4  border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email ?? ""}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject ?? ""}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message ?? ""}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-4 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                {/* <button
                      type="submit"
                      disabled={loading}
                      aria-disabled={loading}
                    className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg transition-all duration-300 rounded-md items-center flex justify-center"
                    >
                      {loading && (
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </button> */}
                    
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg transition-all duration-300 rounded-md items-center flex justify-center"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>
                 <div aria-live="polite" className="mt-2">
              {status && (
                <p className={`mt-2 ${status.ok ? "text-green-400" : "text-red-400"}`}>{status.msg}</p>
              )}
            </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-0.5  transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-linear-to-br  flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-6">Follow Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${social.color} p-4 rounded-md text-center font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                      target="_blank"
                    >
                      {social.name}
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
         </div>
         {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t border-blue-900 p-6 rounded-2xl text-center mt-20 m-auto max-w-6xl"
            >
              <h4 className="text-xl font-bold mb-3 text-white">Ready to Start?</h4>
              <p className="text-gray-200 mb-4">
                Let's discuss your project and create something extraordinary together.
              </p>
              <button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-md">
                Schedule a Call
              </button>
          </motion.div>
      </div>
    </section>
  );
}