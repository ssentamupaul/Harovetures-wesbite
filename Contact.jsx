import React from "react";
import imagea from "../img/a.png";
import imageb from "../img/b.png";
import imagec from "../img/c.png";
import imaged from "../img/d.png";

export default function Contact() {
  const styles = {
    width: "10%",
    marginLeft: " 14px",
  };
  return (
    <div
      className="container-fluid  d-flex flex-column p-5 justify-content-center align-items-center pb-5"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <p
        className="text-center pt-5"
        style={{ fontSize: "60px", fontFamily: "sans-serif" }}
      >
        CONTACT US
      </p>
      <div className="text-center">
        <p className="font-size-5" style={{ fontSize: "20px" }}>
          If you have an investment opportunity that you believe fits Haro's
          mandate, please email at:
        </p>
        <button
          className="btn  btn-rounded text-white"
          style={{
            backgroundColor: "#3898ec",
          }}
        >
          inest@haroventures.com
        </button>
        <p className="font-size-md" style={{ fontSize: "20px" }}>
          We tend to make a net new investment every couple months, and <br />{" "}
          this is a side business. Please remember to include in your email:
        </p>
        <div className="d-flex flex-wrap justify-content-center align-items-center ">
          <img src={imagea} alt="a" style={styles} />
          <p className="mt-3 ml-3" style={{ fontSize: "15px" }}>
            What you offer
          </p>
          <img src={imageb} alt="b" style={styles} />
          <p className="mt-3 ml-3" style={{ fontSize: "15px" }}>
            Pitch deck
          </p>
          <img src={imagec} alt="c" style={styles} />
          <p className="mt-3 ml-3" style={{ fontSize: "15px" }}>
            Supporting docs
          </p>
          <img src={imaged} alt="d" style={styles} />
          <p className="mt-3 ml-3" style={{ fontSize: "15px" }}>
            Keep it concise
          </p>
        </div>
      </div>
    </div>
  );
}
