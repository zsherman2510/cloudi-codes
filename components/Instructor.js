import React from "react";

export default function Instructor() {
  return (
    <div className="instructor_wrapper">
      <div className="instructor">
        <div className="title">The Instructor</div>
        <h1>Zavion Sherman</h1>
        <div className="image"></div>
      </div>
      <div className="about_me">
        Full-Stack developer with 3 years of experience in software development.
        I still code everyday for a full-time job so the things that I teach are
        coming from the experiences I encountered. Join me along in the software
        development journey and let coding change your life too!
      </div>
      <style jsx>
        {`
          .instructor_wrapper {
            display: flex;
            flex-direction: column;
            padding: 2rem 8%;
          }

          .instructor .image {
            width: 250px;
            height: 250px;
            border-radius: 5px;
            background-image: url(/instructor.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }

          .about_me {
            width: 350px;
            margin-top: 6rem;
            line-height: 40px;
          }

          @media screen and (min-width: 1073px) {
            .instructor_wrapper {
              flex-direction: row;
            }

            .about_me {
              margin-left: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
