import { useEffect, useState, useRef } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleScrollSpy = () => {
      const sections = navItems.map(item => item.url);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  // New minimalist design with floating elements
  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl shadow-teal-500/10 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Left */}
          <Link
            to="introduction"
            smooth={true}
            duration={800}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <img 
                src={logo} 
                className="h-12 w-12 rounded-xl relative z-10 transform group-hover:scale-110 transition-all duration-300" 
                alt="Nikhil" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Nikhil</span>
              <span className="text-xs text-teal-500 font-medium tracking-wider">DEVELOPER</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  to={item.url}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-100}
                  onSetActive={setActiveSection}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.url
                      ? "text-teal-500 bg-teal-50"
                      : "text-gray-600 hover:text-teal-500 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  {activeSection === item.url && (
                    <div className="absolute inset-0 border-2 border-teal-500 rounded-full animate-pulse-slow"></div>
                  )}
                </Link>
                
                {/* Hover dot indicator */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Right Section - Contact & Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Contact Button - Desktop */}
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50"
            >
              <span className="font-semibold text-sm">Get In Touch</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden flex flex-col space-y-1.5 p-2 rounded-lg transition-all duration-300 ${
                isMenuOpen ? 'bg-teal-50' : 'hover:bg-gray-100'
              }`}
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2 bg-teal-500' : ''
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2 bg-teal-500' : ''
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/60 p-6 shadow-2xl">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  smooth={true}
                  duration={800}
                  onClick={handleMenuClick}
                  className={`block px-4 py-3 rounded-xl text-center font-medium transition-all duration-300 ${
                    activeSection === item.url
                      ? 'bg-teal-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-teal-50 hover:text-teal-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <Link
                to="contact"
                smooth={true}
                duration={800}
                onClick={handleMenuClick}
                className="block px-4 py-3 bg-teal-500 text-white rounded-xl text-center font-semibold hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300"
          style={{
            width: `${((navItems.findIndex(item => item.url === activeSection) + 1) / navItems.length) * 100}%`
          }}
        ></div>
      </div>
    </nav>
  );
};

export default NavBar;