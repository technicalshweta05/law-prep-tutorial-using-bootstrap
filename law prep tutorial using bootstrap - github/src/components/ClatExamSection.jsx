import React from "react";

const ClatExamSection = () => {
  return (
    <section className="clat-exam-section py-5">

      <div className="container">

        {/* Top Row */}

        <div className="row align-items-center gy-5 mb-5">

          {/* Left Image */}

          <div className="col-lg-5 text-center">

            <img
              src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/test-img.png"
              alt="Student"
              className="img-fluid clat-main-img"
            />

          </div>

          {/* Right Content */}

          <div className="col-lg-7">

            <h2 className="clat-title">
              India's Best CLAT Scholarship Test 2027
            </h2>

            <p className="clat-text">
              LPSAT (Law Prep Scholarship Admission Test) is India's largest
              CLAT scholarship test, designed to help serious aspirants fulfil
              their dream of studying law at the top NLUs. By participating in
              this test, students stand a chance to earn significant
              scholarships and gain access to Law Prep's expert faculty,
              proven study materials, and structured preparation plans.
            </p>

            <p className="clat-text">
              With a comprehensive approach to CLAT preparation, Law Prep
              ensures that students receive personalized attention, mock tests,
              and in-depth performance analysis to boost their readiness for
              the exam.
            </p>

            <p className="clat-text">
              Take this scholarship test of CLAT 2027, rise above the
              competition, and set yourself on the path to success with
              India's most trusted CLAT preparation institute.
            </p>

            <button className="btn clat-btn mt-2">
              Attempt Now
            </button>

          </div>

        </div>

        {/* Bottom Card */}

        <div className="about-clat-card">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2 className="about-title">
                About CLAT Exam
              </h2>

              <p className="about-text">
                The Common Law Admission Test (CLAT) is a national-level
                entrance examination conducted annually for students seeking
                admission into undergraduate law programmes in India. It is
                the gateway to National Law Universities (NLUs) and several
                leading private law schools across the country.
              </p>

              <p className="about-text">
                The examination evaluates Legal Reasoning, Logical Reasoning,
                English, Current Affairs, General Knowledge and Quantitative
                Techniques to assess a student's aptitude for legal studies.
              </p>

              <button className="btn clat-btn mt-2">
                Attempt Now
              </button>

            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">

              <img
                src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/about-clat.png"
                alt="Student"
                className="img-fluid about-img"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ClatExamSection;