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
            <a href="#myapps">
              <span>
                <i class="fas fa-bars"></i>
              </span>{" "}
              &ensp; May Apps
            </a>
            <a href="#resource">
              <span>
                <i class="fas fa-user-friends"></i>
              </span>{" "}
              &ensp; Resource
            </a>
            <a href="#organization">
              <span>
                <i class="fas fa-home"></i>
              </span>{" "}
              &ensp; My Organization
            </a>
            <a href="#setting">
              <span>
                <i class="fas fa-users-cog"></i>
              </span>{" "}
              &ensp; Setting
            </a>
            <a href="#logout">
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
        <br />
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            {" "}
            <b> &larr; Century</b> &#62;{" "}
            <b className="text-success">Division</b>
            <br />
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <br />
                <table width="100%">
                  <tr className="table-heading">
                    <th>Cake Division</th>
                    <th className="text-right">...</th>
                  </tr>
                  <tr className="table-description">
                    <td colSpan={2}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="text-center">
              <button className="btn add-button" width="100%">
                + Add New Division
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
