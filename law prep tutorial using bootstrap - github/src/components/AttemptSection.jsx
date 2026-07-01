import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const benefits = [
  {
    title: "Paper Medium & Mode",
    desc: "Top performers have the chance to earn full scholarships for CLAT coaching.",
  },
  {
    title: "Guaranteed Scholarship for All",
    desc: "Every student attempting LPSAT is guaranteed to receive a scholarship based on their performance.",
  },
  {
    title: "Discounted Access to Top CLAT Coaching",
    desc: "Get access to India's No. 1 CLAT coaching institute at a discounted price.",
  },
  {
    title: "No Financial Barriers",
    desc: "LPSAT makes quality CLAT coaching affordable, no matter your financial situation.",
  },
  {
    title: "Scholarship Based on Merit",
    desc: "Your LPSAT score determines the scholarship, ensuring fairness and rewarding hard work.",
  },
  {
    title: "Better Preparation Support",
    desc: "Secure a scholarship and enhance your CLAT preparation with the best support available.",
  },
];

const AttemptSection = () => {
  return (
    <section
      className="py-5"
      style={{ background: "#FDF2F2" }}
    >
      <div className="container">

        {/* Heading */}

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-5">

          <div>

            <h2 className="attempt-heading mb-2">
              Why Attempt CLAT Scholarship Test by Law Prep?
            </h2>

            <p className="attempt-subtitle mb-0">
              Know the benefits of taking LPSAT CLAT scholarship test
            </p>

          </div>

          <button className="btn attempt-btn mt-4 mt-lg-0">
            Apply Now
          </button>

        </div>

        {/* Cards */}

        <div className="row g-4">

          {benefits.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="attempt-card">

                <div className="d-flex align-items-start">

                  <div className="attempt-icon">
                    <IoCheckmarkDoneCircleOutline />
                  </div>

                  <div>

                    <h4 className="attempt-card-title">
                      {item.title}
                    </h4>

                    <p className="attempt-card-text mb-0">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AttemptSection;