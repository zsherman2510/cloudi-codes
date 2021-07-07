import React from "react";
import Box from "../components/Box";
import {
  FaMapMarkedAlt,
  FaTools,
  FaHandsHelping,
  FaCss3,
  FaReact,
  FaShopify,
  FaHtml5,
} from "react-icons/fa";

import { IconContext } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { SiNextDotJs, SiCsharp, SiMysql } from "react-icons/si";
import styles from "../styles/Program.module.css";
export default function SectionTwo() {
  const programs = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: "Roadmap for success",
      value:
        "A roadmap to learn the most relevant technologies and skills to land your first job as a Developer. Courses that are tailored to skills and technologies that are in-demand for employers and business owners.",
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Learn by Building Real Projects",
      value:
        "The best way to learn any of these technologies is by building projects to solidify what you have gone over.  Having real projects and having the ability to showcase them will heighten your chance of landing a job or a paying contract with your next client.",
    },
    {
      id: 3,
      icon: <FaHandsHelping />,
      title: "Technical Support",
      value:
        "In this industry, we make mistakes without knowing them and having someone to message for help or when you are stuck is pivotal in this industry. Becoming 'stuck' is normal but often time we get discouraged and say to ourselves we aren't made for this but with the right support, you can learn from your mistakes and move forward.",
    },
  ];
  return (
    <div className="section_two">
      <h1>What's included</h1>
      <div className={styles.subtitle}>
        Information you will find in our courses
      </div>
      <div className={styles.logos}>
        <div className="logo html">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <FaHtml5 />
          </IconContext.Provider>
        </div>
        <div className="logo light_blue">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <FaCss3 />
          </IconContext.Provider>
        </div>
        <div className="logo gold">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <DiJavascript1 />
          </IconContext.Provider>
        </div>
        <div className="logo light_blue">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <FaReact />
          </IconContext.Provider>
        </div>
        <div className="logo light">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <SiNextDotJs />
          </IconContext.Provider>
        </div>
        <div className="logo purple">
          <IconContext.Provider value={{ size: "1.8em" }}>
            <SiCsharp />
          </IconContext.Provider>
        </div>
        <div className="logo html">
          <IconContext.Provider value={{ size: "1.8em", color: "orange" }}>
            <SiMysql />
          </IconContext.Provider>
        </div>
        <div className="logo green">
          <IconContext.Provider value={{ size: "1.8em", color: "green" }}>
            <FaShopify />
          </IconContext.Provider>
        </div>
      </div>
      <div className="wrapper">
        {programs.map((item) => (
          <Box
            key={item.id}
            icon={item.icon}
            point={item.title}
            explanation={item.value}
          />
        ))}
      </div>
    </div>
  );
}
