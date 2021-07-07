import React from "react";
import Box from "./Box";

import { FaBusinessTime, FaCode, FaStar } from "react-icons/fa";

export default function SectionOne() {
  const data = [
    {
      id: 1,
      point: "Complete Coding Courses at Your Pace",
      explanation:
        "We understand our lives are different and making time to learn and improve your future while maintaining your present life can be challenging. Learning at your own pace will give you the opportunity to make your own coding schedule. ",
      icon: <FaBusinessTime />,
    },
    {
      id: 2,
      point: "Attain skills that are economically bullet-proof",
      explanation:
        "Once you have become proficient in learning the craft of software development, you will be able to utilize these skills while being employed by companies, free-lancing using page-builders like Shopify, building your own applications.  There are many ways to earn income using these skills. ",
      icon: <FaCode />,
    },
    {
      id: 3,
      point: "Build a Portfolio with real projects to market yourself",
      explanation:
        "In this industry, if you are coming from the self taught route, its best to have a showcase of projects to show off what you are able to do. Build real projects with our courses and land a job in the industry.",
      icon: <FaStar />,
    },
  ];

  return (
    <>
      <div className="section_one">
        <h1 className="title">Get Hired in 1 - 2 - 3</h1>
        <div className="box_wrapper">
          {data.map((item) => (
            <Box
              key={item.id}
              point={item.point}
              explanation={item.explanation}
              icon={item.icon}
              className="primary"
            />
          ))}
        </div>
      </div>
    </>
  );
}
