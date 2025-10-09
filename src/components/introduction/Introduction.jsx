import { useRef, useEffect, useState } from "react";
import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "~3 Years",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "37+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "52+",
  },
];

const Introduction = () => {
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

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      id="introduction"
    >
      {/* Background Animated Elements */}
      <div className="absolute top-10% left-5% w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20% right-10% w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40% left-60% w-56 h-56 bg-teal-500/8 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content Section */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Main Heading with Typing Effect */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
                  Full Stack Developer
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-800">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent mt-2">
                  Nikhil
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                I transform complex ideas into 
                <span className="text-teal-500 font-semibold"> elegant digital solutions </span>
                that make a real impact.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                Passionate about creating seamless user experiences and robust backend systems. 
                Every project is an opportunity to push boundaries and deliver excellence through 
                clean code and innovative thinking.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                href="mailto:example@gmail.com"
              >
                <span className="relative z-10">Say Hello! 👋</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute -inset-1 bg-teal-500/20 rounded-2xl blur group-hover:blur-lg transition-all duration-300"></div>
              </a>

              {/* Secondary CTA */}
              <a
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-teal-500/20 text-gray-700 font-semibold rounded-2xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-300"
                href="#portfolio"
              >
                View My Work
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Stats Section - Enhanced */}
            <div className={`grid grid-cols-3 gap-4 pt-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {informationSummaryData.map((item, index) => (
                <div 
                  key={item.id}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-teal-500/40 hover:shadow-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-teal-500 group-hover:scale-110 transition-transform duration-300">
                    {item.description}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Image Container */}
            <div className="relative group">
              {/* Floating Background Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse-slow"></div>
              
              {/* Image with Border Animation */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-white shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-700"
                  src={person}
                  alt="Nikhil - Full Stack Developer"
                />
                
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10">
                  <div className="absolute inset-2 bg-white rounded-xl"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                💻 Developer
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform group-hover:-rotate-12 transition-all duration-300">
                🚀 Innovator
              </div>

              {/* Tech Stack Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/60">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 opacity-5">
              <div className="grid grid-cols-3 gap-8 rotate-45">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-8 h-8 border-2 border-teal-500 rounded-lg animate-spin-slow" 
                    style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-teal-500">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-teal-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;