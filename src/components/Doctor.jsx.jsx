import React from "react";

const Doctor = () => {
  return (
    <div className="sub_page">
      {/* Header Section */}
      <header className="header_section">{/* Header content */}</header>

      {/* Doctor Section */}
      <section className="team_section layout_padding">
        <div className="container">
          <h2>
            Our <span>Doctors</span>
          </h2>
          <div className="carousel-wrap">
            <div className="item">
              <img src="/images/team1.jpg" alt="Doctor 1" />
              <h5>Doctor Name</h5>
            </div>
            <div className="item">
              <img src="/images/team2.jpg" alt="Doctor 2" />
              <h5>Doctor Name</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
