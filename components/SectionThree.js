import React from "react";
import InfoBox from "../components/InfoBox";
export default function SectionThree({ courses }) {
  return (
    <div className="section_three">
      <h1>Courses</h1>
      <div className="sub_header">Learn on your own terms</div>
      <div className="wrapper">
        {courses.map((course) => (
          <InfoBox key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
