import { useRef, useEffect, useState } from "react";
import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
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
      className={`relative mx-4 xxl:mx-0.5 mt-20 lg:mt-28 z-10 rounded-3xl bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm border border-gray-200/60 shadow-2xl shadow-teal-500/10 xl:p-16 lg:p-12 md:p-10 sm:p-8 p-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="profile"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="flex max-lg:flex-col justify-between items-center gap-12 lg:gap-16">
        {/* Profile Image with Advanced Animations */}
        <div className="relative group">
          {/* Floating Background Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-white shadow-2xl transform group-hover:scale-105 transition-all duration-500">
            <div className="max-w-80 lg:max-w-96 h-auto">
              <img
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                src={person}
                alt="Nikhil - Full Stack Developer"
              />
            </div>
            
            {/* Floating Tech Badges */}
            <div className="absolute -top-1 -right-1 m-2 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform group-hover:rotate-12 transition-all duration-300">
              <FontAwesomeIcon icon={faCode} className="mr-1" />
              Developer
            </div>
            <div className="absolute -bottom-1 m-2 -left-1 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform group-hover:-rotate-12 transition-all duration-300">
              <FontAwesomeIcon icon={faRocket} className="mr-1" />
              Innovator
            </div>
          </div>

          {/* Social Media Section with Enhanced Design */}
          <div className="relative mt-8 transform group-hover:translate-y-2 transition-all duration-500">
            <div className="flex justify-center">
              <div className="px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/60 hover:shadow-2xl transition-all duration-300">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 max-lg:text-center lg:pl-8">
          {/* Animated Title */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-teal-600 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            Crafting Digital<br />
            <span className="text-teal-500">Experiences</span> That Matter
          </h2>

          {/* Enhanced Description */}
          <div
            className={`text-sm sm:text-base lg:text-lg font-normal text-gray-600 leading-relaxed space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              Passionate Full Stack Developer with a focus on creating meaningful digital solutions
            </p>
            <p>
              I transform complex problems into <span className="text-teal-500 font-semibold">elegant, user-friendly applications</span>. 
              Every line of code I write is driven by a desire to create impactful digital experiences 
              that make a difference in people's lives.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              and constantly pushing the boundaries of what's possible in web development.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`mt-12 flex max-lg:justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Projects Button */}
            <a
              className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              href="#portfolio"
            >
              <span className="relative z-10">View My Projects</span>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>

            {/* Download CV Button */}
            <a
              className={`group relative flex items-center gap-3 px-8 py-4 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-teal-500/20 hover:border-teal-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
              href="/Nikhil-full-stack-2025.pdf" 
              download="/Nikhil-full-stack-2025.pdf"
            >
              <FontAwesomeIcon 
                icon={faDownload} 
                className="text-teal-500 transform group-hover:scale-110 transition-transform duration-300" 
              />
              <span>Download CV</span>
              <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          </div>

          {/* Stats Section */}
          <div className={`mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center p-4 bg-white/50 rounded-2xl border border-gray-200/60 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-2xl font-bold text-teal-500">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-2xl border border-gray-200/60 hover:border-teal-500/30 transition-all duration-300">
              <div className="text-2xl font-bold text-teal-500">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
    </div>
  );
};

export default Profile;