import React from "react";

const Treatment = () => {
  return (
    <div className="sub_page">
      {/* Header Section */}
      <header className="header_section">{/* Header content */}</header>

      {/* Treatment Section */}
      <section className="treatment_section layout_padding">
        <div className="container">
          <h2>
            Hospital <span>Treatment</span>
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <img src="/images/t1.png" alt="Nephrologist Care" />
                <h4>Nephrologist Care</h4>
                <p>Content about nephrologist care...</p>
              </div>
            </div>
            {/* Additional treatment items */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatment;
