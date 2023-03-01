import React from "react";
import NavBar from "./NavBar";
import { AiOutlineDown } from "react-icons/ai";
import AfterHome from "./AfterHome";
import James from "./james";

export default function Home() {
  return (
    <div>
      <div className="mt-3">
        <NavBar />
      </div>
      <div className="home-text">
        <h1
          className="text-white "
          style={{
            textAlign: "center",
            fontSize: "6em",
            letterSpacing: "20px",
            // fontFamily: "Arial",
            fontWeight: " 900",
          }}
        >
          INVESTING IN <br />
          TOMORROW'S <br />
          LEADERS <br /> <br />
          <AiOutlineDown style={{ fontWeight: " 900" }} />
        </h1>
      </div>
      <AfterHome />
      <James />
    </div>
  );
}
