import React from "react";

const Testimonial = () => {
  return (
    <div className="sub_page">
      {/* Header Section */}
      <header className="header_section">{/* Header content */}</header>

      {/* Testimonial Section */}
      <section className="client_section layout_padding">
        <div className="container">
          <h2>Testimonial</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <p>“Testimonial text goes here”</p>
                <h5>Client Name</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
