import React, { useState } from "react";
import logo from "../img/logo.png";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar navbar-expand-lg justify-content-around align-items-center">
      <div>
        <a className="navbar-brand" href="you">
          <img src={logo} alt="logo" className="Logo" />
        </a>
      </div>
      <div>
        {/* <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex ">
            <li className="nav-item active">
              <a className="nav-link text-white" href="you">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="you">
                THESIS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="you">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="you">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="you">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// <button
// className="navbar-toggler"
// type="button"
// data-toggle="collapse"
// data-target="#navbarNav"
// aria-controls="navbarNav"
// aria-expanded="false"
// aria-label="Toggle navigation"
// >
// <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarNav">
// <ul className="navbar-nav d-flex ">
//   <li className="nav-item active">
//     <a className="nav-link text-white" href="you">
//       ABOUT
//     </a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link text-white" href="you">
//       THESIS
//     </a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link text-white" href="you">
//       Pricing
//     </a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link text-white" href="you">
//       PORTFOLIO
//     </a>
//   </li>
//   <li className="nav-item">
//     <a className="nav-link text-white" href="you">
//       CONTACT
//     </a>
//   </li>
// </ul>
// </div>
// </div>
// );
// }
