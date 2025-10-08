import { useRef, useEffect, useState } from "react";
import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description: "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
    icon: "🎯",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    gradient: "from-blue-500 to-teal-500"
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description: "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
    icon: "🎨",
    features: ["Visual Design", "Design Systems", "Interaction Design", "Responsive Design"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
    icon: "💻",
    features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"],
    gradient: "from-green-500 to-teal-500"
  },
];

const Profession = () => {
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
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
      id="services"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
                  My Services
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                What I
                <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                  Do Best
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                I specialize in creating <span className="text-teal-500 font-semibold">end-to-end digital solutions</span> that 
                combine beautiful design with powerful functionality.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                From initial concept to final deployment, I ensure every project delivers 
                exceptional user experiences while meeting business objectives with 
                cutting-edge technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { number: "37+", label: "Projects Completed" },
                { number: "~3", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-teal-500/30 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold text-teal-500 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Right Content - Services */}
          <div className="space-y-8">
            {rolesData.map((role, index) => (
              <div
                key={role.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Service Card */}
                <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-teal-500/30">
                  
                  {/* Header with Icon */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${role.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{role.icon}</span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 mb-3">
                        {role.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-3">
                    {role.features.map((feature, featureIndex) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-teal-50 text-teal-600 text-sm font-medium rounded-full border border-teal-500/20 transition-all duration-300 hover:bg-teal-500 hover:text-white group-hover:translate-y-0 transform translate-y-1"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
                </div>

                {/* Connecting Line (for last two items) */}
                {index < rolesData.length - 1 && (
                  <div className="hidden lg:block absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                )}
              </div>
            ))}

            {/* Additional CTA Card */}
            <div className={`relative p-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl text-white transform hover:scale-105 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-teal-100 mb-6">
                  Let's discuss your project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-600 font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Start Conversation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600/20 text-white font-semibold rounded-2xl border border-teal-400/30 hover:bg-teal-600/30 transition-all duration-300"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profession;