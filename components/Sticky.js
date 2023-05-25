import React from "react";

const Sticky = () => {
  return (
    <section className="section sticky">
      <div className="container">
        <span className="eyebrow">Get the help you need</span>
        <h2>Our Approach</h2>
        <p className="lead">
          We are passionate about helping small to medium businesses establish a
          strong online presence and unlock their true potential. Our team of
          skilled professionals is dedicated to delivering exceptional results
          that exceed your expectations. To do this, we follow a 7 step process.
        </p>
        <div className="grid grid-2">
          <div className="sticky-content">
            <div className="sticky-block">
              <h3 className="h2">
                <mark>1.</mark> Understanding Your Business
              </h3>
              <p>
                We begin every project by taking the time to understand your
                business goals, target audience, and industry dynamics. By
                gaining a deep understanding of your business, we ensure that
                our solutions align with your vision and resonate with your
                target market.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>2.</mark> Customized Designs
              </h3>
              <p>
                We believe in the power of visual storytelling. Our team of
                talented designers will work closely with you to create a
                captivating and intuitive user interface that not only engages
                your visitors but also conveys your brand identity effectively.
                Every design element is carefully curated to reflect your unique
                value proposition.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>3.</mark> Responsive Development
              </h3>
              <p>
                We build websites and web applications that adapt seamlessly to
                different screen sizes and devices. Our expert developers employ
                the latest technologies and industry best practices to ensure
                your online presence remains consistent and user-friendly across
                desktops, tablets, and smartphones.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>4.</mark> Scalable Solutions
              </h3>
              <p>
                We understand that as your business grows, your digital needs
                evolve. Our solutions are built with scalability in mind,
                allowing your website or web application to expand and
                accommodate increasing traffic, content, and functionality
                without compromising performance or user experience.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>5.</mark> User-Centric Approach
              </h3>
              <p>
                User experience (UX) is at the core of everything we do. We
                conduct thorough user research and implement intuitive
                navigation and interactions to provide your visitors with a
                seamless browsing experience. By prioritizing user satisfaction,
                we aim to increase conversions and drive business growth.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>6.</mark> Robust Functionality
              </h3>
              <p>
                Whether you require an e-commerce platform, a content management
                system, or a custom web application, our team has the technical
                expertise to bring your ideas to life. We leverage cutting-edge
                technologies and frameworks to develop robust, secure, and
                scalable solutions that streamline your business processes.
              </p>
            </div>
            <div className="sticky-block">
              <h3 className="h2">
                <mark>7.</mark> Ongoing Support
              </h3>
              <p>
                Our partnership does not end with the launch of your website or
                web application. We provide ongoing maintenance, security
                updates, and technical support to ensure your digital presence
                remains optimized and secure. We are committed to your success
                and are always available to assist you whenever you need us.
              </p>
            </div>
          </div>
          <img
            src="/images/pt.png"
            alt="sticky image"
            className="sticky-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Sticky;
