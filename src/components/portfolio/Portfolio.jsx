import { useRef, useEffect, useState } from "react";

const projectData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Real Estate",
    title: "Silver Oak Properties",
    description: "Global real estate platform with property listings, virtual tours, and advanced search functionality across multiple countries.",
    link: "https://www.silveroakglobal.com/",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
    featured: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Dashboard",
    title: "Multi-Country Dashboard",
    description: "Enterprise-level admin dashboard for managing real estate properties with real-time analytics and reporting.",
    link: "https://sop-cms.silveroak.ae/login",
    technologies: ["React", "Chart.js", "Redux", "REST API", "AWS"],
    featured: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Travel & Tourism",
    title: "Trip Management Portal",
    description: "Complete travel booking ecosystem with itinerary management, payment processing, and customer support system.",
    link: "https://admireholidays.com/",
    technologies: ["Vue.js", "Express", "MySQL", "Payment Gateway", "Email API"],
    featured: false
  },
  {
    id: 4,
    image: "https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png",
    category: "Healthcare",
    title: "Therapy & Counseling Platform",
    description: "Secure mental health platform connecting therapists with clients through appointments and virtual sessions.",
    link: "https://www.mychildtherapy.org/",
    technologies: ["React", "Firebase", "Stripe", "WebRTC", "Security"],
    featured: false
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Mobile App",
    title: "Mobile Product Application",
    description: "Interactive mobile app with advanced animations and real-time data visualization for product analytics.",
    link: "https://yumlabs.vercel.app/",
    technologies: ["React Native", "GSAP", "Firebase", "Framer Motion"],
    featured: true
  },
  {
    id: 6,
    image: "https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png",
    category: "Real Estate",
    title: "Luxury Real Estate Platform",
    description: "Premium property showcase platform with virtual tours and high-end client experience for luxury homes.",
    link: "https://www.luxuryresidencesindia.in/",
    technologies: ["Next.js", "Tailwind", "Cloudinary", "SEO Optimization"],
    featured: false
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Corporate",
    title: "Seven Hills Innovation",
    description: "Corporate website for innovation consultancy featuring service showcases, case studies, and client portfolio.",
    link: "http://sevenhillsinnovation.com/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
    featured: true
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Construction",
    title: "KK Pools & Construction",
    description: "Professional website for swimming pool construction company with project gallery and service offerings.",
    link: "https://kkpools.in/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: false
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Corporate",
    title: "JKP Corporate Solutions",
    description: "Business consultancy website with service pages, about section, and professional contact integration.",
    link: "https://jkpcin.com/",
    technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
    featured: false
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "E-commerce",
    title: "Gupta Wood Products",
    description: "E-commerce platform for wood products manufacturer with product catalog and secure order management.",
    link: "https://guptawoodproducts.com/",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    featured: true
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
    category: "Productivity",
    title: "Pidify - PDF Management",
    description: "Modern PDF management tool with editing, conversion, and organization features for enhanced productivity.",
    link: "https://pidify.vercel.app/",
    technologies: ["Next.js", "TypeScript", "PDF.js", "Vercel"],
    featured: true
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", ...new Set(projectData.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen" id="portfolio">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my professional work across various industries and technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Counter */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Showing <span className="text-teal-600 font-bold">{filteredProjects.length}</span> projects
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {project.category}
                </div>

                {/* View Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full border border-teal-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-300">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Live Demo Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Live Demo ›
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600">No projects available in the selected category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to create something amazing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#work-process"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-white hover:text-teal-600 transition-all duration-300"
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