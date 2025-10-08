import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message: "Working with Nikhil was a fantastic experience. His attention to detail and commitment to quality exceeded our expectations.",
    quote: `From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!`,
    name: "Esha Gupta",
    // designation: "Managing Director, ABC Company",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    message: "His expertise in UI/UX design helped us transform our digital presence and improve user engagement.",
    quote: `Nikhil demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.`,
    name: "Ansh Tanwer",
    // designation: "COO, XYZ Company",
    rating: 5,
    project: "Dashboard System"
  },
  {
    message: "Professional, reliable, and creative—everything you want in a development partner.",
    quote: `He delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.`,
    name: "Mohit Kumar",
    // designation: "Managing Director, KFC Company",
    rating: 4,
    project: "Mobile Application"
  },
  {
    message: "His development skills and proactive approach truly stood out during our collaboration.",
    quote: `Nikhil quickly understood our requirements and translated them into an elegant, user-friendly solution. The end product boosted our business efficiency and client satisfaction.`,
    name: "Shivani Sharma",
    // designation: "CTO, Global Tech Solutions",
    rating: 5,
    project: "Web Application"
  },
  {
    message: "A dedicated developer that delivers beyond expectations—highly creative and technically strong.",
    quote: `He handled every phase of the project with clarity and precision. Our new platform has significantly improved customer engagement and brand visibility.`,
    name: "Rahul Mehta",
    // designation: "Founder, TravelEase Portal",
    rating: 5,
    project: "Booking Platform"
  },
  {
    message: "Seamless communication and impressive delivery timelines made the entire project stress-free.",
    quote: `Nikhil provided innovative solutions that solved our challenges effectively. We are extremely happy with the final outcome and would definitely collaborate again.`,
    name: "Devang Singh",
    // designation: "Product Manager, EduCare Systems",
    rating: 4,
    project: "Educational Platform"
  },
];

const Testimonial = () => {
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            What Clients
            <span className="block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="testimonialSwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  {/* Testimonial Card */}
                  <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-teal-500/30 h-full">
                    
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      "
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 justify-center">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Message */}
                    <p className="text-gray-600 leading-relaxed text-center mb-6 italic">
                      "{testimonial.message}"
                    </p>

                    {/* Full Quote */}
                    <p className="text-gray-500 leading-relaxed text-sm mb-6">
                      {testimonial.quote}
                    </p>

                    {/* Project Info */}
                    <div className="mb-6 p-4 bg-teal-50 rounded-2xl border border-teal-500/20">
                      <div className="text-teal-600 text-sm font-semibold mb-1">Project:</div>
                      <div className="text-gray-700 text-sm">{testimonial.project}</div>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.designation}</div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "On-Time Delivery" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-teal-500/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl font-bold text-teal-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready to Join Happy Clients?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's work together to create something amazing for your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;