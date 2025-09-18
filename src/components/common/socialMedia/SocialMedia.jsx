import {
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faWhatsapp,
    link: "https://wa.me/919817887826?text=hey", // WhatsApp with preset message
  },
  {
    icon: faInstagram,
    link: "https://instagram.com/Khanna_here_", // Instagram
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/nikhil-khangwal-9b5a03257", // LinkedIn
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank" // open in new tab
      rel="noopener noreferrer"
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md"
      key={index}
    >
      <FontAwesomeIcon icon={item.icon} className="text-xl w-4.5 aspect-square" />
    </a>
  ));
};

export default SocialMedia;
