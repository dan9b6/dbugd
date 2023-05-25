import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Offering digital solutions.</h1>
          <h1>Swatting digital problems.</h1>
          <p className="lead">
            We build beautiful websites and web applications for businesses
            looking to fly!
          </p>
          <div className="grid grid-2">
            <Link href="/" className="btn">
              See our services
            </Link>
            <Link href="/" className="btn btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/pt.png" alt="prototype" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
