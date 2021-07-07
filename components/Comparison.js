import React from "react";

export default function Comparison() {
  return (
    <div className="comparisons">
      <h2>Cost of Learning using Outdated methods</h2>
      <div className="wrapper">
        <div className="comparison_box">
          <div className="comparison_title">Coding Bootcamps</div>
          <div className="comparison_length">16 weeks long</div>
          <div className="comparison_length">Content is rushed</div>
          <div className="comparison_length">Projects are half built</div>
          <div className="comparison_length">Unreliable Instructors</div>
          <div className="price">$10,000+</div>
        </div>

        <div className="comparison_box">
          <div className="comparison_title">Computer Science Degree </div>
          <div className="comparison_length">4+ years full-time</div>
          <div className="comparison_length">Learn outdated material</div>
          <div className="comparison_length">
            Spend time learning things that is not needed
          </div>
          <div className="comparison_length">
            Once completed you will be behind
          </div>
          <div className="price">$50,000+</div>
        </div>
      </div>
    </div>
  );
}
