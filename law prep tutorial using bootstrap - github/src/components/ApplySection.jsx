import React from "react";
import { PiGraduationCap } from "react-icons/pi";

const applyData = [
  {
    title: "10th, 11th and 12th Grade Students",
    description:
      "Students currently in 11th or 12th grade, thinking about a career in law, should take our CLAT scholarship test. Early preparation significantly boosts your chances of securing a seat in the top NLUs and acing the CLAT exam with expert guidance.",
  },
  {
    title: "Droppers Aiming for CLAT 2027",
    description:
      "If you've taken a gap year to focus on CLAT 2027 preparation, our CLAT scholarship test is designed for you. Maximize your learning with Law Prep's proven strategies and coaching, all while benefiting from potential scholarships based on your LPSAT performance.",
  },
  {
    title: "Any CLAT Aspirant",
    description:
      "If you're aiming to crack CLAT, LPSAT is the perfect scholarship opportunity to access top-tier coaching. Whether you're preparing for your first attempt or reattempting, this test provides a chance to secure up to 100% off on coaching fees.",
  },
];

const ApplySection = () => {
  return (
    <section className="apply-section py-5">

      <div className="container">

        <h2 className="apply-heading text-center mb-5">
          Who Should Apply for CLAT Scholarship Test?
        </h2>

        <div className="row g-4">

          {applyData.map((item, index) => (

            <div className="col-lg-4" key={index}>

              <div className="apply-card">

                <div className="apply-icon">

                  <PiGraduationCap />

                </div>

                <h4 className="apply-card-title">
                  {item.title}
                </h4>

                <p className="apply-card-text mb-0">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ApplySection;