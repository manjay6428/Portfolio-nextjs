import right_arrow_white from "./right-arrow-white.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import manjayProfile from "./manjayProfile.png";
import manjay_logo from "./manjay_logo.png";
import manjay_work from "./manjay_work.png";

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaFigma,
  FaCode,
  FaAppStore,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiTypescript, SiJira, SiNeo4J, SiExpress } from "react-icons/si";
import { PiFileCppDuotone } from "react-icons/pi";

export const assets = {
  right_arrow_white,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  manjayProfile,
  manjay_logo,
  manjay_work,
};
export const accessKey = "b26f71e8-b96d-4368-aa39-0eb7b6128c1c";

export const projects = [
  {
    id: 1,
    name: "MERN E-commerce",
    description:
      "A full-stack MERN application with Redux for state management, featuring user authentication, product management, and order processing",
    type: "fullStack",
    imageUrl: "/mern.png",
    githubLink: "https://github.com/manjay6428/MERN-E-commerce",
    demoLink: "https://mern-e-commerce-1-9nqg.onrender.com/",
  },
  {
    id: 2,
    name: "Restaurent app using React+Redux",
    description:
      "Fully responsive website hungerBuddy build with React+redux persist which stores cart items data at local storage. Download it from playStore.",
    type: "fullStack",
    imageUrl: "/hungerBudddy.jpg",
    githubLink: "https://github.com/manjay6428/HungerBuddy",
    demoLink: "https://hungerbuddy.netlify.app/",
  },
  {
    id: 3,
    name: "Recipe On The Go",
    description: "complete recipe to make you a home-made Chef",
    type: "fullStack",
    imageUrl: "/recipeOnTheGo.jpg",
    githubLink: "https://github.com/manjay6428/RecipeMaker",
    demoLink: "",
  },
  {
    id: 4,
    name: "Food delivering website",
    description:
      "Fully responsive website myFamilia where you can order food from restaurants anytime anywhere. Download it from playStore.",
    type: "frontend",
    imageUrl: "/myFamilia.jpg",
    githubLink: "https://github.com/manjay6428/myFamilia",
    demoLink: "https://myfamilia.netlify.app/",
  },
  {
    id: 5,
    name: "Corona Virus Tracker",
    description: "Check all the covid related data and be updated and alert.",
    type: "backend",
    imageUrl: "/covidTracker.jpg",
    githubLink: "https://github.com/manjay6428/covid19tracker",
    demoLink: "https://covid19trackernet.netlify.app/",
  },
  {
    id: 6,
    name: "Bulb Meter",
    description:
      "Save Electricity,save Earth! check your daily consumptions and save electricity.",
    type: "frontend",
    imageUrl: "/bulbMeter.jpg",
    githubLink: "https://github.com/manjay6428/bulb-meter",
    demoLink: "https://billmeter.netlify.app/",
  },
  {
    id: 7,
    name: "Questionnaire website",
    description:
      "A Questionnaire website developed for a client with questions-ready for IAS Preparation",
    type: "frontend",
    imageUrl: "/questionnaireWebsite.jpg",
    githubLink: "https://github.com/manjay6428/Questionnaire-website",
    demoLink: "https://quizappio11.netlify.app/",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Punjab Technical University",
    year: "2019 - 2023",
  },
  {
    degree: "Intermediate",
    institution: "Gulab Memorial Inter college",
    year: "2016 - 2018",
  },
  {
    degree: "Matriculation",
    institution: "Assembly of God church school",
    year: "2015 - 2016",
  },
];

export const workHistory = [
  {
    company: "Byteridge",
    role: "Software Development Engineer",
    duration: "2023 - Present",
    description: [
      "Translated intricate Figma wireframes into responsive React components.",
      "Refactored existing code and streamlined project workflows, enhancing overall efficiency by 25%.",
      "Implemented React hooks and Redux to streamline data flow and reduce code complexity,",
      "Developed UI for CTS , enabling 150+ employees to track their quarterly KPIs resulting in a 30% increase in engagement and a 20% reduction in manual errors",
    ],
  },
  {
    company: "Software Development Engineer Intern , Byteridge",
    role: "Software Development Engineer Intern",
    duration: "2022 - 2023",
    description: [
      "Built a mentee-mentor app, enabling 200+ mentees to book mentors and receive guidance, improving efficiency by 40%.",
      "Managed a team of 5 to add real-time scheduling and communication, reducing response times by 30%.",
      "Refactored UI, increasing usability and user satisfaction by 25%.",
    ],
  },
];
export const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={30} /> },
  { name: "React", icon: <FaReact size={30} /> },
  { name: "Next.js", icon: <RiNextjsFill size={30} /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt size={30} /> },
  { name: "Node.js", icon: <FaNodeJs size={30} /> },
  { name: "MongoDB", icon: <DiMongodb size={30} /> },
  { name: "Express", icon: <SiExpress size={30} /> },
  { name: "TypeScript", icon: <SiTypescript size={30} /> },
  { name: "Github", icon: <FaGithub size={30} /> },
  { name: "Figma", icon: <FaFigma size={30} /> },
  { name: "Neo4j", icon: <SiNeo4J size={30} /> },
  { name: "Jira", icon: <SiJira size={30} /> },
  { name: "C++", icon: <PiFileCppDuotone size={30} /> },
  { name: "VS Code", icon: <VscVscode size={30} /> },
];

export const services = [
  {
    icon: <FaCode size={30} />,
    title: "Web Design",
    description:
      "Creating beautiful and eye-sighting websites designs,attractive layouts and to improve the user experience of the viewer.",
  },
  {
    icon: <FaCode size={30} />,
    title: "UI/UX Design",
    description:
      "create user-friendly interfaces that enable users to understand how to use complex technical products with the latest technologies.",
  },
  {
    icon: <FaAppStore size={30} />,
    title: "App Design",
    description:
      "Designing an application,responsible for developing and maintaining application programs.",
  },
  {
    icon: <FaCode size={30} />,
    title: "Branding",
    description:
      "Building brand identities that connect with people through creative visual designs and clear communication.",
  },
  {
    icon: <FaCode size={30} />,
    title: "Digital Marketing",
    description:
      "Helping businesses grow with tailored digital marketing strategies, SEO, content creation, and social media management.",
  },
  {
    icon: <FaCode size={30} />,
    title: "E-Commerce Solutions",
    description:
      "Building customized e-commerce platforms to help businesses sell products online, with secure payments and easy navigation.",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    feedback:
      "This service was amazing! It truly exceeded my expectations. I highly recommend it to anyone looking for quality work.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    feedback:
      "The experience was fantastic. The attention to detail and professionalism were outstanding.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Marketing Manager",
    feedback:
      "A game-changer! The results were beyond what I had imagined. Looking forward to working together again!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];
