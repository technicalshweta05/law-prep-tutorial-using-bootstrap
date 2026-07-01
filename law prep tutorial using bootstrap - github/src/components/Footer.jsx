import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="container">

        {/* Logo */}

        <div className="text-center">

          <img
            src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/cropped-Logo-Law-Prep-1.png"
            alt="Law Prep"
            className="footer-logo"
          />

        </div>

        {/* Description */}

        <p className="footer-text text-center">

          Law Prep Tutorial is India's best CLAT coaching institute,
          helping aspirants achieve their dreams of graduating from the
          top NLUs in the country.

        </p>

      </div>

      <div className="footer-bottom">

        <div className="container">

          <p className="footer-copy mb-0 text-center">

            © Copyright 2026 All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;