import React, { useState } from "react";
import navLogo from "../assets/logo.jpg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Card from "./Card";
import ReportCard from "./ReportCard";

const Header = () => {
  const [openCard, setOpenCard] = useState(false);
  const [reportCard, setReportCard] = useState(false);


  return (
    <>
      <nav class={`navbar bg-white sticky-top ${styles.navBar}`}>
        <div class="container-fluid">

          <div className={styles.navbarWrap}>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* <div className={styles.navbarWrap}> */}
            <a class="navbar-brand" href="#">
              <img src={navLogo} alt="Bootstrap" className={styles.img} />
            </a>
          </div>
          <div className="btns">
            <button type="button" className="btn btn-primary" onClick={() => setOpenCard(!openCard)}>
              Rate Me
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setReportCard(!reportCard)}>
              Report a Bug
            </button>
          </div>
          {/* </div> */}


          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Virtual Labs
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}
                <li class="nav-item">
                  <Link to="/alm" class='nav-link active'>Alm</Link>
                </li>
                <li class="nav-item">
                  <Link to="/theory" class='nav-link'>Theory</Link>
                </li>
                <li class="nav-item">
                  <Link to="pretest" class='nav-link'>Pretest</Link>
                </li>
                <li class="nav-item">
                  <Link to="procedure" class='nav-link'>Procedure</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class='nav-link'>Simulation</Link>
                </li>
                <li class="nav-item">
                  <Link to="posttest" class='nav-link'>Posttest</Link>
                </li>
                <li class="nav-item">
                  <Link to="reference" class='nav-link'>Reference</Link>
                </li>
                <li class="nav-item">
                  <Link to="feedback" class='nav-link'>Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {openCard ? <Card /> : ""}
      {reportCard ? <ReportCard /> : ""}

      {/* <nav class="navbar bg-light" className={styles.navBar}>
        <div class="container">
          <div className={styles.navbarWrap}>
            <a class="navbar-brand" href="#">
              <img src={navLogo} alt="Bootstrap" className={styles.img} />
            </a>  
            <div className="btns">
              <button type="button" className="btn btn-primary">
                Rate Me
              </button>
              <button type="button" className="btn btn-primary">
                Report a Bug
              </button>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
