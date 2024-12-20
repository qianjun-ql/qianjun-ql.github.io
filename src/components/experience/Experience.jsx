import React, { useRef } from "react";
import "./experience.scss";
import { color, motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const items = [
  {
    id: 1,
    title: "React Developer",
    company_name: "65Square",
    logo: "/defendlogo.png",
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Integrated 10+ APIs with Python Django backend to enable real-time updates and data synchronization. ",
      "Developed React components based on Figma design files, improving user satisfaction by 10%.",
      "Implemented Role-Based Access Control using Redux for global state management to reduce redundant API calls by 25%.",
      "Resolved daily bugs, improving system stability and user experience.",
      "Gathered requirements and designed API architecture, leading to 100% functionality across the system.",
    ],
  },
  {
    id: 1,
    title: "Product Manager",
    company_name: "QIMA",
    logo: "/qimalogo.jpeg",
    iconBg: "#383E56",
    date: "September 2021 - April 2023",
    points: [
      "Managed the development of the order management system and client website for the business line with $70M annual revenue, ensuring effective support to over 98 % of all business scenarios.",
      "Led and delivered 40+ cross-functional software projects, achieving 100% on-time delivery.",
      "Lead and worked in a scrum team of 6 members and hosted scrum planning and grooming meetings.",
      "Developed product prototypes in Figma, gathered detailed product documentation and user instructions.",
      "Managed customer expectations and improved customer satisfaction to 96% by ensuring high-priority troubleshooting solved within 1 day.",
    ],
  },
  {
    id: 1,
    title: "Product Manager",
    company_name: "Smartmore",
    logo: "/smartmore-logo.jpeg",
    iconBg: "#E6DEDD",
    date: "Feburary 2020 - June 2021",
    points: [
      "Lead the delivery and iteration of the super-algorithm AI SaaS platform and 10+ AI projects.",
      "Defined and led the development of product benchmarks 5 times faster than the original to 0.2s/frame through technical analysis, making #1 algorithm in the industry.",
      "Completed the delivery of the company’s 1st AI project in one month by self-directedly learning computer vision AI technologies.",
      "Conducted analysis reports including product flowcharts and business scenarios on major competitors to define product benchmarks.",
    ],
  },
];

export const variants = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const ExperienceCard = ({ item, position }) => {
  return (
    <div className="experience">
      <VerticalTimelineElement
        position={position}
        contentStyle={{
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          alignItems: "flex-start",
          left: "0%",
          marginLeft: "5rem",
        }}
        contentArrowStyle={{
          display: "none",
        }}
        iconStyle={{
          background: item.iconBg,
          marginTop: "1rem",
          overflow: "hidden",
          left: "5%",
        }}
        icon={<img src={item.logo} alt="" />}
      >
        <div className="textContainer">
          <motion.div variants={variants}>
            <h3>{item.title}</h3>
            <h3> {item.date}</h3>
            <p>{item.company_name}</p>
          </motion.div>
          <motion.div className="desc">
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience-page">
      <section className="experience">
        <VerticalTimeline>
          {items.map((item, index) => (
            <ExperienceCard
              item={item}
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Experience;
