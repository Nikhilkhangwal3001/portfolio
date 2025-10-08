import { useRef, useEffect, useState } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPaperPlane,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Dwarka, Delhi",
    link: "https://maps.google.com/?q=Dwarka,Delhi",
    gradient: "from-blue-500 to-teal-500"
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "nikhilkhanna3001@gmail.com",
    link: "mailto:nikhilkhanna3001@gmail.com",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+91-9817887826",
    link: "tel:+919817887826",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: faClock,
    title: "Response Time",
    description: "Within 2 Hours",
    gradient: "from-orange-500 to-red-500"
  },
];

const Contact = () => {
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
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'm available for freelance work. Let's discuss 
            your ideas and turn them into reality with cutting-edge solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {addressData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Contact Card */}
                  <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-teal-500/30 h-full">
                    
                    {/* Icon */}
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={item.icon} />
                      <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-teal-500 transition-colors duration-300 block"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.description}</p>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Work With Me?</h3>
              <div className="space-y-3">
                {[
                  "🚀 Fast and reliable delivery",
                  "💬 Clear communication throughout",
                  "🎯 Solutions tailored to your needs",
                  "🔧 Ongoing support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className={`text-center lg:text-left transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow My Work</h3>
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:shadow-lg transition-all duration-300">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Form Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-2xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-10">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-teal-500 text-xl" />
                  <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
                    Send a Message
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  Start Your Project
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you within 2 hours.
                </p>
              </div>

              {/* Enhanced Form */}
              <Form />

              {/* Quick Contact Options */}
              <div className="mt-8 pt-8 border-t border-gray-200/60">
                <p className="text-center text-gray-600 text-sm mb-4">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919817887826?text=Hey%2C%20I%20have%20an%20idea%20to%20create%20an%20application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.452"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:nikhilkhanna3001@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { number: "2h", label: "Avg. Reply" },
                { number: "100%", label: "Response" },
                { number: "24/7", label: "Available" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="text-lg font-bold text-teal-500">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;