import React from "react";
import { API_URL } from "../config";
import Link from "next/link";
export default function InfoBox({ course }) {
  return (
    <div className="info_box">
      <div className="status_wrapper">
        <div
          className={`status ${!course.status ? "status_red" : "status_green"}`}
        ></div>
        <div className="status_desc">
          {!course.status ? "Coming Soon" : "Ready for purchase"}
        </div>
      </div>
      <div className="title">
        {course.title}/{course.subtitle}
      </div>
      <div className="description">{course.description}</div>

      <div className="link">
        <button>
          <a href={course.link}>Enroll now</a>
        </button>
        <Link href={`/courses/${course.slug}`}>
          <button className="button_secondary">View Course</button>
        </Link>
      </div>
    </div>
  );
}
