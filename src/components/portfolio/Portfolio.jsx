import { useRef, useEffect, useState } from "react";
import card1 from "../../assets/images/portfolio-images/card-1.jpg";
import card2 from "../../assets/images/portfolio-images/card-7.png";
import card3 from "../../assets/images/portfolio-images/card-3.jpg";
import card4 from "../../assets/images/portfolio-images/card-10.webp";
import card5 from "../../assets/images/portfolio-images/card-6.webp";
import card6 from "../../assets/images/portfolio-images/card-2.webp";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Real Estate",
    title: "Silver Oak Properties",
    description: "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://www.silveroakglobal.com/",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    image: card2,
    category: "Dashboard Integration",
    title: "Multi-Country Dashboard",
    description: "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "https://sop-cms.silveroak.ae/login",
    technologies: ["React", "Chart.js", "API Integration"],
    featured: true
  },
  {
    id: 3,
    image: card3,
    category: "Booking System",
    title: "Trip Management Portal",
    description: "Developed a modern admin panel with a focus on usability and seamless navigation for end users.",
    link: "https://admireholidays.com/",
    technologies: ["Vue.js", "Express", "MySQL"],
    featured: false
  },
  {
    id: 4,
    image: card4,
    category: "Health & Wellness",
    title: "Therapy & Counseling Platform",
    description: "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes.",
    link: "https://www.mychildtherapy.org/",
    technologies: ["React", "Firebase", "Stripe"],
    featured: false
  },
  {
    id: 5,
    image: card5,
    category: "Animation",
    title: "Mobile Product Application",
    description: "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "https://yumlabs.vercel.app/",
    technologies: ["GSAP", "React Native", "Framer Motion"],
    featured: true
  },
  {
    id: 6,
    image: card6,
    category: "UI/UX Design",
    title: "Real Estate Web Application",
    description: "Enhanced user experience by streamlining workflows and optimizing interface components.",
    link: "https://www.luxuryresidencesindia.in/",
    technologies: ["Next.js", "Tailwind", "Figma"],
    featured: false
  },
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const categories = ["All", ...new Set(projectData.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
      id="portfolio"
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
              My Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Featured
            <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing innovative solutions, 
            clean design, and cutting-edge technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-500 border border-gray-200/60'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-teal-500/30">
                
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* View Project Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-teal-500 text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-medium rounded-full border border-teal-500/20 transition-all duration-300 hover:bg-teal-500 hover:text-white"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's collaborate to bring your ideas to life with cutting-edge technology and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start a Project
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#work-process"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-teal-500/20 hover:border-teal-500 hover:bg-teal-50 transition-all duration-300"
              >
                View My Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;