import React from "react";
import img1 from "./about us/img1.gif";
import img2 from "./about us/img2.gif";
import img3 from "./about us/img3.gif";
import img4 from "./about us/img4.gif";

import "./AboutUs.css";
const aboutUs = () => {
  return (
    <div className="body-a">
      <br />
      <br />

      <div className="Services1">
        <div>
          <img className="img1" src={img1} />
        </div>
        <div className="DoctorSevice1">
          <h4 className="text3">
            <h2 className="3">Our Mission:</h2>
            The Petaluma Health Center’s mission is to ensure access, and to
            provide high quality prevention-focused health care for the
            communities we serve.
          </h4>
        </div>
      </div>

      <div className="Services2">
        <div>
          <img className="img4" src={img4} />
        </div>

        <div className="DoctorSevice1">
          <h4 className="text3">
            <h2 className="title3"> Our Values :</h2>
            We strive for Excellence in all we do. We serve with Compassion and
            Integrity. We are Dependable. We are committed to Collaboration. We
            boldly Innovate. We view our world with Optimism. We develop Trust
            with everyone.
          </h4>
        </div>
      </div>

      <div className="Services3">
        <div>
          <img className="img2" src={img2} />
        </div>
        <div className="DoctorSevice1">
          <h4 className="text3">
            <h2 className="title3">Our Vision</h2>
            It is the vision of the Petaluma Health Center to foster a healthy
            community where all individuals reach their highest potential for
            health and well-being.
          </h4>
        </div>
      </div>

      <div className="Services4">
        <div>
          <img className="img3" src={img3}></img>
        </div>
        <div className="DoctorSevice1">
          <h4 className="text3">
            <h2 className="title3"> Innovation :</h2>
            PHC is widely recognized for our innovation and has been on the
            leading edge of team based care since 2007, emphasizing overall
            wellness and the value of the patient provider relationship. Our new
            endeavors include: Digital Health Programs for diabetes prevention
          </h4>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
