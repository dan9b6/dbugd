import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const togNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-grid">
          <div className="header-logo">dbugd</div>
          <div className={`header-nav ${toggleNav ? "active" : ""}`}>
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Our Clients</Link>
                  </li>
                  <li>
                    <Link href="/">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/">Our Pricing</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-cta">
            <Link href="/" className="btn">
              Contact Us
            </Link>
            <button
              className={`header-nav-btn ${toggleNav ? "active" : ""}`}
              onClick={togNav}
              aria-label="header navigation toggle button"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
