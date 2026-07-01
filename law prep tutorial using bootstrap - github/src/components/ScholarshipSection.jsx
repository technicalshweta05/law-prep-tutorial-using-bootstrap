import React from "react";
import {
  FaGlobe,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  MdOndemandVideo,
  MdOutlineGrade,
  MdFlashOn,
} from "react-icons/md";

const scholarshipData = [
  {
    id: 1,
    icon: <MdOndemandVideo />,
    iconBg: "#EEF2FF",
    iconColor: "#5B6CFF",
    title: "Paper Medium & Mode",
    description: "Medium: English || Mode: Offline",
  },
  {
    id: 2,
    icon: <MdOutlineGrade />,
    iconBg: "#E6F8FF",
    iconColor: "#46B8E9",
    title: "No. of Questions & Marks",
    description: "Total Questions: 60 || Marks: 1 Mark / Question",
  },
  {
    id: 3,
    icon: <MdFlashOn />,
    iconBg: "#F3E8FF",
    iconColor: "#8B5CF6",
    title: "Negative Marking & Duration",
    description: "Negative Marking: 0.25 Marks/Wrong Answer || Duration: 1 Hour",
  },
  {
    id: 4,
    icon: <FaClipboardCheck />,
    iconBg: "#DDF8F3",
    iconColor: "#1AA59A",
    title: "Test Timings",
    description: "Everyday || Attempt Anytime Between 10:30 AM to 07:30 PM",
  },
];

const ScholarshipSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-5">

          <div>
            <h2 className="fw-bold display-5 mb-2">
              CLAT Scholarship Test Details
            </h2>

            <p className="fs-4 fw-semibold mb-0">
              Know details of Law Prep's CLAT scholarship test.
            </p>
          </div>

          <button className="btn scholarship-btn mt-4 mt-lg-0">
            Apply Now
          </button>

        </div>

        {/* Cards */}
        <div className="row g-4">

          {scholarshipData.map((item) => (
            <div className="col-lg-6" key={item.id}>

              <div className="scholarship-card">

                <div
                  className="scholarship-icon"
                  style={{
                    background: item.iconBg,
                    color: item.iconColor,
                  }}
                >
                  {item.icon}
                </div>

                <div>

                  <h4 className="fw-bold mb-2">
                    {item.title}
                  </h4>

                  <p className="mb-0 d-flex align-items-center flex-wrap">

                    <FaGlobe className="me-2 text-secondary" />

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

export default ScholarshipSection;