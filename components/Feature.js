import React from "react";

const Feature = () => {
  return (
    <section className="section feature">
      <div className="container">
        <div className="feature-grid">
          <div className="feature-text">
            <span className="eyebrow">About us</span>
            <h2 className="feature-title">Who are we?</h2>
            <p className="lead">
              At <mark>dbugd</mark> , we specialize in crafting stunning
              websites and developing powerful web applications tailored to meet
              the unique needs of small to medium businesses. With our expertise
              and dedication, we strive to elevate your online presence and
              empower your brand to thrive in the digital landscape.
            </p>
          </div>
          <img src="/images/pt.png" alt="prototype" className="feature-image" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
