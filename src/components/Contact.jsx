import React from "react";

const Contact = () => {
  return (
    <div className="sub_page">
      {/* Header Section */}
      <header className="header_section">{/* Header content */}</header>

      {/* Contact Section */}
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-7">
              <form>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
                <button>SEND</button>
              </form>
            </div>
            <div className="col-md-5">
              <div className="img-box">
                <img src="/images/contact-img.jpg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
