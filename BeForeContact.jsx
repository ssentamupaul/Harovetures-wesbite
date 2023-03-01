import React from "react";
import backgroundImage from "../img/boats.jpg";

export default function BeForeContact() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: "60vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    backgroundAttachment: "fixed",
    //     alignItems: "top",
    padding: "0px",
    marginTop: "",
  };

  return <div style={styles}></div>;
}
