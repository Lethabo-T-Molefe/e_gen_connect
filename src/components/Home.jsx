import React from "react";

const Home = () => {
  return (
    <div>
      <div className="hero_area">
        {/* Header section starts */}
        <header className="header_section">
          {/* <div className="header_top">
            <div className="container">
              <div className="contact_nav">
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call : +01 123455678990</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Email : demo@gmail.com</span>
                </a>
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
              </div>
            </div>
          </div> */}

          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand" href="index.html">
                  <img src="images/LM Logo Symbol.png" alt="Logo" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Media
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Business
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="quote_btn-container">
                    <a href="">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>Login</span>
                    </a>
                    <a href="">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span>Sign Up</span>
                    </a>
                    <form className="form-inline">
                      <button
                        className="btn my-2 my-sm-0 nav_search-btn"
                        type="submit"
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* End header section */}

        {/* Slider section */}
        <section className="slider_section">
          <div className="dot_design">
            <img src="images/dots.png" alt="Dots Design" />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div className="play_btn">
                          <button>
                            <i className="fa fa-play" aria-hidden="true"></i>
                          </button>
                        </div>
                        <h1>
                          Tshwane <br />
                          <span>eGenConnect</span>
                        </h1>
                        <p>
                          Digital, efficient solution for managing generator
                          applications in a connected, user-friendly way
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.jpg" alt="Slider Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more carousel items here if needed */}
            </div>
            <div className="carousel_btn-box">
              <a
                className="carousel-control-prev"
                href="#customCarousel1"
                role="button"
                data-slide="prev"
              >
                <img src="images/prev.png" alt="Previous" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <img src="images/next.png" alt="Next" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* End slider section */}
      </div>

      {/* Book section */}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <h4>
                  BOOK <span>APPOINTMENT</span>
                </h4>
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputPatientName">Patient Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPatientName"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDoctorName">Doctor's Name</label>
                    <select
                      name=""
                      className="form-control wide"
                      id="inputDoctorName"
                    >
                      <option value="Normal distribution">
                        Normal distribution
                      </option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDepartmentName">
                      Department's Name
                    </label>
                    <select
                      name=""
                      className="form-control wide"
                      id="inputDepartmentName"
                    >
                      <option value="Normal distribution">
                        Normal distribution
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputPhone">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPhone"
                      placeholder="XXXXXXXXXX"
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputSymptoms">Symptoms</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSymptoms"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputDate">Choose Date</label>
                    <div
                      className="input-group date"
                      id="inputDate"
                      data-date-format="mm-dd-yyyy"
                    >
                      <input type="text" className="form-control" readOnly />
                      <span className="input-group-addon date_icon">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="btn">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End book section */}
    </div>
  );
};

export default Home;
