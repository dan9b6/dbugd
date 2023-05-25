import React from "react";

const Contact = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="container--narrow">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <p className="lead">
              Ready to take your business to the next level? Contact us today to
              discuss your project and discover how we can collaborate to create
              a remarkable digital experience for your brand.
            </p>
          </div>
          <form className="form contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Message</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="form-footer">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
