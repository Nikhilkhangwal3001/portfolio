import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.",
    quote: `From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!`,
    name: "Esther Howard",
    designation: "Managing Director, ABC Company",
  },
  {
    message:
      "Their expertise in UI/UX design helped us transform our digital presence and improve user engagement.",
    quote: `The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.`,
    name: "Ali Haider",
    designation: "COO, XYZ Company",
  },
  {
    message:
      "Professional, reliable, and creative—everything you want in a development partner.",
    quote: `They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.`,
    name: "Elon Max",
    designation: "Managing Director, KFC Company",
  },
  {
    message:
      "Their development skills and proactive approach truly stood out during our collaboration.",
    quote: `They quickly understood our requirements and translated them into an elegant, user-friendly solution. The end product boosted our business efficiency and client satisfaction.`,
    name: "Sophia Williams",
    designation: "CTO, Global Tech Solutions",
  },
  {
    message:
      "A dedicated team that delivers beyond expectations—highly creative and technically strong.",
    quote: `They handled every phase of the project with clarity and precision. Our new platform has significantly improved customer engagement and brand visibility.`,
    name: "Rahul Mehta",
    designation: "Founder, TravelEase Portal",
  },
  {
    message:
      "Seamless communication and impressive delivery timelines made the entire project stress-free.",
    quote: `They provided innovative solutions that solved our challenges effectively. We are extremely happy with the final outcome and would definitely collaborate again.`,
    name: "Emily Johnson",
    designation: "Product Manager, EduCare Systems",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
