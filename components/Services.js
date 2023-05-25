import React from "react";
import Card from "./Card";

const Services = () => {
  // Define an array of services
  const services = [
    {
      title: "Website Design",
      description:
        "Create visually stunning and user-friendly websites that leave a lasting impression on your visitors.",
      icon: "/images/icons/palette.svg",
    },
    {
      title: "Web Development",
      description:
        "Build custom web applications and websites tailored to your unique business needs and goals.",
      icon: "/images/icons/code.svg",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Set up online stores with seamless shopping experiences and secure payment gateways.",
      icon: "/images/icons/basket.svg",
    },
    {
      title: "Responsive Design",
      description:
        "Ensure your website looks and functions flawlessly across all devices and screen sizes.",
      icon: "/images/icons/responsive.svg",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility in search engines and drive organic traffic to your business.",
      icon: "/images/icons/seo.svg",
    },
    {
      title: "Website Maintenance",
      description:
        "Keep your website up to date, secure, and running smoothly with regular maintenance and support.",
      icon: "/images/icons/spanner.svg",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="lead">
          At our web agency, we offer a wide range of services to help you
          succeed online.
        </p>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              icon={service.icon}
              alt={`${service.title} icon`}
            >
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
