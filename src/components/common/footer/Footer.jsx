import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/logo.png";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];

const Footer = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float-slow"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className={`grid lg:grid-cols-3 gap-12 lg:gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link
              to="introduction"
              smooth={true}
              duration={800}
              className="flex items-center group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                <img 
                  src={logo} 
                  className="h-14 w-14 rounded-2xl relative z-10 transform group-hover:scale-110 transition-all duration-300" 
                  alt="Nikhil's Logo" 
                />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                  Nikhil
                </p>
                <p className="text-sm text-gray-400 mt-1">Full Stack Developer</p>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Creating digital experiences that make a difference. Let's build something amazing together.
            </p>

            {/* Direct Contact Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:nikhilkhanna3001@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30 transition-all duration-300"
              >
                <span>📧</span>
                Email Me
              </a>
              <a
                href="tel:+919817887826"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30 transition-all duration-300"
              >
                <span>📱</span>
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.url}
                  smooth={true}
                  duration={800}
                  className={`group flex items-center text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              {[
                {
                  icon: "📍",
                  text: "Dwarka, Delhi",
                  link: "https://maps.google.com/?q=Dwarka,Delhi"
                },
                {
                  icon: "📧",
                  text: "nikhilkhanna3001@gmail.com",
                  link: "mailto:nikhilkhanna3001@gmail.com"
                },
                {
                  icon: "📱",
                  text: "+91-9817887826",
                  link: "tel:+919817887826"
                }
              ].map((contact, index) => (
                <a
                  key={contact.text}
                  href={contact.link}
                  className={`flex items-center group text-gray-400 hover:text-teal-400 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <span className="text-lg mr-3 transform group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <span className="group-hover:underline">{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className={`mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-white font-semibold">Available for work</div>
                  <div className="text-gray-400 text-sm">Fast response guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 mt-12 pt-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-center lg:text-left">
              <p>
                © {currentYear} Nikhil. All rights reserved. | 
                <span className="text-teal-400 ml-1">Made with Me💖</span>
              </p>
            </div>

            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>Developed with passion by</span>
              <a
                href="tel:+91-9817887826"
                className="text-teal-400 font-semibold hover:text-teal-300 transition-colors duration-300 hover:underline"
              >
                Nikhil
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-2xl border border-white/10 hover:border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span>Back to Top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-1">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;