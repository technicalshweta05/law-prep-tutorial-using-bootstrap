import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          
          <img
            src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/cropped-Logo-Law-Prep.png"
            alt="Law Prep Tutorial"
            className="img-fluid"
            style={{ height: "72px", objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;