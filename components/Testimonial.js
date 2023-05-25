import React from "react";

const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="testimonial">
          <img
            src="/images/pt.png"
            alt="testimonial logo"
            className="testimonial-logo"
          />
          <div className="container--narrow">
            <p className="lead">
              <strong>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </strong>
            </p>
          </div>
          <img
            src="/images/pt.png"
            alt="testimonial logo"
            className="testimonial-image"
          />
          <p>
            <strong>Joe Bloggs</strong> - CEO of Workstation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
