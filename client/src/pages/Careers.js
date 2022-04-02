import React from "react";
import imag1 from "./career/imag1.png";
import "./Career.css";
const Careers = () => {
  return (
    <div className="body-c">
      <div className="career">
        <h1>career</h1>
      </div>
      <div>
        <img src={imag1} className="imag1" />
      </div>
      <div>
        <div className="bellive">
          <h2 className="title"> What we believe:</h2>
          <h4 className="text">
            Putting patients at the center is the key to transforming health. A
            collaborative team based approach is the key to solving complex
            problems. The cornerstone of a healthy community is access to the
            highest quality healthcare for all.
          </h4>
        </div>
      </div>
      <div>
        <div className="offer">
          <h2 className="title"> What we offer:</h2>
          <h4 className="text">
            A progressive, open, inspired approach to health care. Excellent
            leadership opportunities with an opportunity to make a difference.
            Excellent benefits and a competitive salary.
          </h4>
        </div>
      </div>
      <div>
        <div className="work">
          <h2 className="title2">Get paid for putting your passion to work!</h2>
          <h4 className="text2">
            We hire the best and the brightest. We’re looking for people who are
            as passionate about ensuring that all people have access to
            exceptional healthcare as they are about making a positive
            difference in our world.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Careers;
