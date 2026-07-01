import React from "react";

const ClatScholarship = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5">

          <div className="row align-items-center g-5">

            {/* Left Image */}
            <div className="col-lg-6">

              <img
                src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/scholar-tes.webp"
                alt="CLAT Scholarship"
                className="img-fluid rounded-4 w-100"
              />

            </div>

            {/* Right Content */}
            <div className="col-lg-6">

              {/* Badge */}
              <span className="clat-badge mb-3 d-inline-block">
                Scholarship
              </span>

              {/* Heading */}
              <h2 className="clat-heading mb-4">
                What is CLAT Scholarship Test?
              </h2>

              {/* Paragraph */}
              <p className="clat-text">
                The CLAT Scholarship Test, also known as LPSAT (Law Prep
                Scholarship Cum Admission Test), is a specially designed exam
                for CLAT aspirants. This test provides students the opportunity
                to earn up to 100% scholarships for Law Prep's CLAT coaching
                programs.
              </p>

              <p className="clat-text mb-4">
                LPSAT evaluates a student's aptitude for CLAT and offers
                financial assistance based on performance. It is available in
                both online and offline modes, making it accessible to students
                across India.
              </p>

              {/* Button */}
              <button className="btn scholarship-attempt-btn">
                Attempt Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClatScholarship;