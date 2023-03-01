import React from "react";
import backgroundImage from "../img/james.jpg";

export default function James() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    backgroundAttachment: "fixed",
    //     alignItems: "top",
    padding: "0px",
  };

  return (
    <div className="container-fluid " style={styles}>
      <div
        className="container-fluid w-100"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(0,53,84, 0.9",
          width: "100%",
          height: "20vh",
          paddingTop: " 50px",
        }}
      >
        <h1
          className="text-white"
          style={{
            textAlign: "center",
            fontSize: "25px",
            // width: "100%",
            height: "20vh",

            letterSpacing: "10px",
            fontFamily: "Franklin Gothic Demi Cond",
          }}
        >
          A DIVERSIFIED TECH FOCUSED INVESTMENT COMPANY
        </h1>
        <hr
          className="container-fluid "
          style={{
            backgroundColor: "#3898ec",
            marginTop: "-70px",
            // padding: " 3px",
            height: "10px",
          }}
        />
      </div>
    </div>
  );
}
