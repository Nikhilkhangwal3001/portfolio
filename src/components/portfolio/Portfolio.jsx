import { useRef, useEffect, useState } from "react";

// Import actual project images (you'll need to add these to your assets)
// For now using descriptive placeholders
const projectData = [
  {
    id: 1,
    image: "/api/placeholder/600/400", // Silver Oak Properties
    category: "Real Estate",
    title: "Silver Oak Properties",
    description: "Global real estate platform with property listings, virtual tours, and advanced search functionality across multiple countries.",
    link: "https://www.silveroakglobal.com/",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
    featured: true,
    status: "Live",
    type: "Web Application"
  },
  {
    id: 2,
    image: "/api/placeholder/600/400", // Multi-Country Dashboard
    category: "Dashboard",
    title: "Multi-Country Dashboard",
    description: "Enterprise-level admin dashboard for managing real estate properties with real-time analytics and reporting.",
    link: "https://sop-cms.silveroak.ae/login",
    technologies: ["React", "Chart.js", "Redux", "REST API", "AWS"],
    featured: true,
    status: "Live",
    type: "Admin Panel"
  },
  {
    id: 3,
    image: "/api/placeholder/600/400", // Admire Holidays
    category: "Travel & Tourism",
    title: "Trip Management Portal",
    description: "Complete travel booking ecosystem with itinerary management, payment processing, and customer support system.",
    link: "https://admireholidays.com/",
    technologies: ["Vue.js", "Express", "MySQL", "Payment Gateway", "Email API"],
    featured: false,
    status: "Live",
    type: "Booking Platform"
  },
  {
    id: 4,
    image: "/api/placeholder/600/400", // My Child Therapy
    category: "Healthcare",
    title: "Therapy & Counseling Platform",
    description: "Secure mental health platform connecting therapists with clients through appointments and virtual sessions.",
    link: "https://www.mychildtherapy.org/",
    technologies: ["React", "Firebase", "Stripe", "WebRTC", "Security"],
    featured: false,
    status: "Live",
    type: "Healthcare Platform"
  },
  {
    id: 5,
    image: "/api/placeholder/600/400", // Yum Labs
    category: "Mobile App",
    title: "Mobile Product Application",
    description: "Interactive mobile app with advanced animations and real-time data visualization for product analytics.",
    link: "https://yumlabs.vercel.app/",
    technologies: ["React Native", "GSAP", "Firebase", "Framer Motion"],
    featured: true,
    status: "Live",
    type: "Mobile Application"
  },
  {
    id: 6,
    image: "/api/placeholder/600/400", // Luxury Residences
    category: "Real Estate",
    title: "Luxury Real Estate Platform",
    description: "Premium property showcase platform with virtual tours and high-end client experience for luxury homes.",
    link: "https://www.luxuryresidencesindia.in/",
    technologies: ["Next.js", "Tailwind", "Cloudinary", "SEO Optimization"],
    featured: false,
    status: "Live",
    type: "Real Estate Portal"
  },
  {
    id: 7,
    image: "/api/placeholder/600/400", // Seven Hills Innovation
    category: "Corporate",
    title: "Seven Hills Innovation",
    description: "Corporate website for innovation consultancy featuring service showcases, case studies, and client portfolio.",
    link: "http://sevenhillsinnovation.com/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
    featured: true,
    status: "Live",
    type: "Corporate Website"
  },
  {
    id: 8,
    image: "/api/placeholder/600/400", // KK Pools
    category: "Construction",
    title: "KK Pools & Construction",
    description: "Professional website for swimming pool construction company with project gallery and service offerings.",
    link: "https://kkpools.in/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: false,
    status: "Live",
    type: "Business Website"
  },
  {
    id: 9,
    image: "/api/placeholder/600/400", // JKP Corporate
    category: "Corporate",
    title: "JKP Corporate Solutions",
    description: "Business consultancy website with service pages, about section, and professional contact integration.",
    link: "https://jkpcin.com/",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
    featured: false,
    status: "Live",
    type: "Business Website"
  },
  {
    id: 10,
    image: "/api/placeholder/600/400", // Gupta Wood Products
    category: "E-commerce",
    title: "Gupta Wood Products",
    description: "E-commerce platform for wood products manufacturer with product catalog and secure order management.",
    link: "https://guptawoodproducts.com/",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    featured: true,
    status: "Live",
    type: "E-commerce Store"
  },
  {
    id: 11,
    image: "/api/placeholder/600/400", // Pidify
    category: "Productivity",
    title: "Pidify - PDF Management",
    description: "Modern PDF management tool with editing, conversion, and organization features for enhanced productivity.",
    link: "https://pidify.vercel.app/",
    technologies: ["Next.js", "TypeScript", "PDF.js", "Vercel"],
    featured: true,
    status: "Live",
    type: "Web Application"
  }
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

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

  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(6);
  };

  // Get unique project types for statistics
  const projectTypes = [...new Set(projectData.map(project => project.type))];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
      id="portfolio"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-teal-500/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#03CAC2 1px, transparent 1px), linear-gradient(90deg, #03CAC2 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Creative Layout */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <span className="text-teal-500 font-bold tracking-widest text-sm uppercase">
              Project Portfolio
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Creative
            <span className="block bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
              Digital Showcase
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Transforming ideas into exceptional digital experiences. Explore my diverse portfolio of 
            <span className="text-teal-500 font-semibold"> web applications, mobile apps, and business solutions </span>
            that drive real results.
          </p>
        </div>

        {/* Interactive Stats Bar */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { 
              number: projectData.length, 
              label: "Projects Completed",
              icon: "🚀"
            },
            { 
              number: projectData.filter(p => p.featured).length, 
              label: "Featured Works",
              icon: "⭐"
            },
            { 
              number: new Set(projectData.map(p => p.category)).size, 
              label: "Industries Served",
              icon: "🏢"
            },
            { 
              number: projectTypes.length, 
              label: "Project Types",
              icon: "🎯"
            }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 hover:border-teal-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-teal-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Creative Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setVisibleProjects(6);
              }}
              className={`group relative px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-500 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-2xl shadow-teal-500/30'
                  : 'bg-white/80 text-gray-700 hover:bg-teal-50 hover:text-teal-600 border-2 border-gray-200/60 hover:border-teal-500/30'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
              {activeFilter === category && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-teal-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Counter with Animation */}
        <div className={`text-center mb-8 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200/60">
            <span className="text-gray-600 font-semibold">Currently Viewing:</span>
            <span className="text-teal-500 font-black text-lg">{projectsToShow.length}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-bold">{filteredProjects.length}</span>
            <span className="text-gray-600 font-semibold">Projects</span>
            {activeFilter !== "All" && (
              <span className="text-teal-500 font-semibold">in {activeFilter}</span>
            )}
          </div>
        </div>

        {/* Creative Projects Grid - Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                gridRow: project.featured ? 'span 2' : 'span 1'
              }}
            >
              {/* Creative Project Card */}
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-gray-200/60 hover:border-teal-500/50 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col ${
                project.featured ? 'featured-card' : 'standard-card'
              }`}>
                
                {/* Image Container with Creative Overlay */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'aspect-[4/3]' : 'aspect-video'
                } flex-shrink-0`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  
                  {/* Creative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, #03CAC2 1px, transparent 1px), linear-gradient(-45deg, #03CAC2 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Creative Badges Container */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    {/* Featured Crown Badge */}
                    {project.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1 animate-pulse">
                        <span>👑</span>
                        FEATURED
                      </div>
                    )}
                    
                    {/* Type Badge */}
                    <div className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                      {project.type}
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                      project.status === "Live" 
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white" 
                        : "bg-yellow-500 text-white"
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Creative Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-800 font-bold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm border-2 border-white"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Explore Live
                    </a>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500/20 rounded-3xl transition-all duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="text-teal-500 text-sm font-black uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
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

                  {/* Title with Creative Typography */}
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1 text-sm lg:text-base">
                    {project.description}
                  </p>

                  {/* Technologies with Creative Layout */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Built With:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 text-xs font-semibold rounded-full border border-teal-500/20 transition-all duration-300 hover:bg-teal-500 hover:text-white hover:scale-105 hover:shadow-lg"
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-300">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Creative Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Load More / Show Less Buttons */}
        {(hasMoreProjects || visibleProjects > 6) && (
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {hasMoreProjects ? (
              <button
                onClick={loadMoreProjects}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 overflow-hidden"
              >
                <span className="relative z-10">Load More Projects</span>
                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </button>
            ) : (
              <button
                onClick={showLessProjects}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-teal-500/20 hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
              >
                Show Less Projects
                <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Creative CTA Section */}
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-gray-200/60 hover:border-teal-500/30 transition-all duration-500 max-w-4xl mx-auto group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wide shadow-lg">
              🚀 Ready to Start?
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 mt-4">
              Let's Create Something
              <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Inspired by my work? Let's collaborate to bring your vision to life with the same 
              level of creativity, quality, and technical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
              
              <a
                href="#work-process"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-teal-500/20 hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
              >
                View My Process
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </a>
            </div>

            {/* CTA Hover Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;