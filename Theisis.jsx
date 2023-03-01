import React from "react";
import BeForeContact from "./BeForeContact";
import BeforeFooter from "./BeforeFooter";
import CardsDb from "./CardsDb";
import Contact from "./Contact";
import Numbers from "./Numbers";
import Portifolia from "./Portifolia";

export default function Theisis() {
  return (
    <div>
      <div
        className="container-fluid bg-white text-dark  "
        style={{
          textAlign: "center",
          fontFamily: "Bahnschrift Light",
        }}
      >
        <div className="pt-5 pb-5">
          <p
            className=""
            style={{
              fontSize: "60px",
            }}
          >
            WHAT WE LIKE
          </p>
          <p
            className=""
            style={{
              fontSize: "20px",
            }}
          >
            High potential, high growth software companies.
          </p>
        </div>
        <CardsDb />
      </div>
      <div className="container-fluid numberz text-white">
        <h1 className="text-white text-center pt-5 ">WHAT WE LOOK FOR</h1>
        <Numbers className=" pb-5" />
      </div>

      <div>
        <BeForeContact />
      </div>
      <div>
        {" "}
        <Contact />
        <div className="container-fluid bg-white">
          <Portifolia />
          <BeforeFooter />
        </div>
      </div>
    </div>
  );
}
