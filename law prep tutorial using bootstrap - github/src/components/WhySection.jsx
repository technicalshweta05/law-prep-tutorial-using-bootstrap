import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const whyData = [
  {
    title: "Gateway to Top Law Colleges",
    description:
      "Clearing CLAT opens doors to prestigious National Law Universities (NLUs) and top private law colleges in India, giving you the best opportunities for your law career.",
  },
  {
    title: "Strong Career Prospects",
    description:
      "Graduating from an NLU boosts your career prospects, leading to top placements in renowned law firms, corporate houses, judiciary, and reputed legal firms nationwide.",
  },
  {
    title: "Versatile Career Opportunities",
    description:
      "Law graduates from NLUs find rewarding careers in litigation, corporate law, judiciary, academics, civil services, and international law.",
  },
  {
    title: "High Placement Packages",
    description:
      "NLUs offer excellent placement opportunities with attractive salary packages in top law firms, multinational companies, and prestigious organizations across India and abroad.",
  },
];

const WhySection = () => {
  return (
    <section className="why-section py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-7">

            <h2 className="why-heading mb-4">
              Why Take CLAT Exam?
            </h2>

            {whyData.map((item, index) => (

              <div className="why-card mb-3" key={index}>

                <div className="why-icon">
                  <IoCheckmarkCircleOutline />
                </div>

                <div>

                  <h5 className="why-card-title">
                    {item.title}
                  </h5>

                  <p className="why-card-text mb-0">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

            <button className="btn why-btn mt-4">
              Attempt Now
            </button>

          </div>

          {/* Right */}

          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <img
              src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/Screenshot-2025-11-28-105241.png"
              alt="Student"
              className="img-fluid why-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhySection;