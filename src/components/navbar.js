import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12">
          <div className="sidebar">
            <a className="active logo-Img">
              <img src="/assets/cait.png" />
            </a>
            <a href="#news">
              <span>
                <i class="fas fa-bars"></i>
              </span>{" "}
              &ensp; May Apps
            </a>
            <a href="#contact">
              <span>
                <i class="fas fa-user-friends"></i>
              </span>{" "}
              &ensp; Resource
            </a>
            <a href="#about">
              <span>
                <i class="fas fa-home"></i>
              </span>{" "}
              &ensp; My Orgenization
            </a>
            <a href="#about">
              <span>
                <i class="fas fa-users-cog"></i>
              </span>{" "}
              &ensp; Setting
            </a>
            <a href="#about">
              {" "}
              <span>
                <i class="fas fa-sign-out-alt"></i>
              </span>{" "}
              &ensp; Logout
            </a>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          {/* == Top navbar start here == */}
          <nav class="navbar navbar-light justify-content-between">
            <div className="container-fluid">
              <a class="navbar-brand">My App &#62; Clients &#62; Sites</a>
              <div class="form-inline">
                <div className="user-icon">
                  <i class="far fa-bell"></i> &ensp;
                  <i class="far fa-user"></i>
                </div>
              </div>
            </div>
          </nav>
          {/* == Top navbar close here == */}
        </div>
      </div>

      <div className="content">
        <h2>Responsive Sidebar Example</h2>
        <p>
          This example use media queries to transform the sidebar to a top
          navigation bar when the screen size is 700px or less.
        </p>
        <p>
          We have also added a media query for screens that are 400px or less,
          which will vertically stack and center the navigation links.
        </p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
    </>
  );
};

export default Navbar;
