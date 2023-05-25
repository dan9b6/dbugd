import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="grid footer-grid">
            <div className="footer-logo">
              dbugd <small>Helping businesses fly...</small>
            </div>
            <Social light />
            <div className="footer-links">
              <ul className="horizontal-list">
                <li>
                  <Link href="/">
                    <small>Our Clients</small>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <small>Our Services</small>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <small>Our Team</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small>Copyright</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
