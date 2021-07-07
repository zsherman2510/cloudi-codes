import React from "react";

export default function Pricing() {
  return (
    <div className="parent">
      <h1>Pricing</h1>
      <div className="pricing_container">
        <div className="pricing">
          <div className="tier">Basic</div>
          <div className="price">Free</div>
          <ul className="group">
            <li>Free Courses &amp; Tutorials</li>
            <li></li>
            <li>Subscribe to the Youtube Channel</li>
            <li>Discounted 1 on 1 help</li>
          </ul>
          <button>
            <a href="#">Sign Up</a>
          </button>
        </div>
        <div className="pricing">
          <div className="tier">Monthly</div>
          <div className="price">$15</div>
          <ul className="group">
            <li>Access to all courses including future courses</li>
            <li>Access to the community</li>
            <li>2 - 1 hour one-on-one </li>
          </ul>
          <button>
            <a href="#">Sign Up</a>
          </button>
        </div>
        <div className="pricing yearly">
          <div className="tier">Yearly</div>
          <div className="price">$160 - 2 months free</div>
          <ul className="group">
            <li>Access to all courses including future courses</li>
            <li>Access to the community</li>
            <li>3 - 1 hour one-on-one </li>
          </ul>
          <button>
            <a href="#">Sign Up</a>
          </button>
        </div>
      </div>
      <style jsx>{`
        .parent {
          padding: 2rem 8%;
          border-bottom: 1px solid #eee;
        }
        .parent h1 {
          text-align: center;
          font-size: 2.5rem;
        }
        .pricing_container {
          display: flex;
          flex-direction: column;
          flex-flow: wrap;
          justify-content: space-around;
        }
        .pricing {
          margin-bottom: 12px;
          border: 1px solid #3c99dc;
          min-width: 380px;
          padding: 2rem 1rem;
          height: 300px;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .yearly {
          background: #3c99dc;
          color: #fff;
        }

        .yearly button {
          background: #fff;
          color: #3c99dc;
        }

        .pricing .tier {
          text-align: center;
          font-size: 1.1rem;
        }

        .pricing .price {
          text-align: center;
          font-size: 1.8rem;
        }

        .pricing .group {
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .pricing .group li {
          list-style: none;
        }

        button {
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
