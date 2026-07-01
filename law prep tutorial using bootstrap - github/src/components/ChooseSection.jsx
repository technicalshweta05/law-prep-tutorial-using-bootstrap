import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const chooseData = [
  {
    title: "India's Biggest & Oldest CLAT Institute",
    description:
      "With 24 years of experience, Law Prep is the most trusted and established CLAT institute, producing exceptional results for decades in the field of law entrance coaching.",
    bg: "#D9F4F6",
    color: "#0EA5B7",
  },
  {
    title: "Highest Number of CLAT Toppers",
    description:
      "We have consistently produced CLAT toppers, including AIR 1 Jai Bohara in CLAT 2024 and 5x AIR 1 in the last 8 years, proving our unmatched expertise in CLAT preparation.",
    bg: "#DCEAFF",
    color: "#3B82F6",
  },
  {
    title: "40+ Offline Centers Across India",
    description:
      "Our extensive network of 40+ centers ensures students across India have access to top-tier CLAT coaching, making high-quality education accessible everywhere.",
    bg: "#FFF0D8",
    color: "#F59E0B",
  },
  {
    title: "Highly Experienced Faculty",
    description:
      "Learn from India's best teachers, who bring years of experience and a deep understanding of CLAT exam patterns, helping students excel in every aspect of the exam.",
    bg: "#FFE1E1",
    color: "#FF6B6B",
  },
];

const ChooseSection = () => {
  return (
    <section className="py-5 bg-white">

      <div className="container">

        {/* Heading */}

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-5">

          <div>

            <h2 className="choose-heading mb-2">
              Why Choose Law Prep for CLAT Preparation ?
            </h2>

            <p className="choose-subtitle mb-0">
              Know why LPT is the number one choice for CLAT aspirants.
            </p>

          </div>

          <button className="btn choose-btn mt-4 mt-lg-0">
            Apply Now
          </button>

        </div>

        {/* Cards */}

        <div className="row g-4">

          {chooseData.map((item, index) => (

            <div className="col-lg-6" key={index}>

              <div className="choose-card">

                <div
                  className="choose-icon"
                  style={{
                    background: item.bg,
                    color: item.color,
                  }}
                >
                  <IoCheckmarkCircleOutline />
                </div>

                <div>

                  <h4 className="choose-card-title">
                    {item.title}
                  </h4>

                  <p className="choose-card-text mb-0">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ChooseSection;