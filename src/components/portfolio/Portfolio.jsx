import Projects from "./Projects";
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
    category: "Real estate",
    title: "Silver Oak Properties",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://www.silveroakglobal.com/",
  },
  {
    id: 2,
    image: card2,
    category: "DASHBOARD INTEGRATION",
    title: "Multi-Country Dashboard",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "https://sop-cms.silveroak.ae/login",
  },
  {
    id: 3,
    image: card3,
    category: "Booking System",
    title: "Trip Management Portal",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "https://admireholidays.com/",
  },
  {
    id: 4,
    image: card4,
    category: "Therapy & Counseling",
    title: "Health & Wellness | Web Application",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "https://www.mychildtherapy.org/",
  },
  {
    id: 5,
    image: card5,
    category: "Animation",
    title: "Mobile Product Apllication ",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "https://yumlabs.vercel.app/",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Real Estate |Web Application",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "https://www.luxuryresidencesindia.in/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
