import React from "react";

const About = () => {
  return (
    <div className="sub_page">
      {/* Header Section */}
      <header className="header_section">
        <div className="header_top">
          <div className="container">
            <div className="contact_nav">
              <a href="#">
                <i className="fa fa-phone" /> Call : +01 123455678990
              </a>
              <a href="#">
                <i className="fa fa-envelope" /> Email : demo@gmail.com
              </a>
              <a href="#">
                <i className="fa fa-map-marker" /> Location
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="/images/about-img.jpg" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2>
                  About <span>Hospital</span>
                </h2>
                <p>...Content goes here...</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
