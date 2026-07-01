import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const steps = [
  {
    title: "Fill the Form",
    description:
      "Submit your name, contact information, and other required details through the given form.",
  },
  {
    title: "Choose Your Test Mode",
    description:
      "Select whether you want to take the test online or offline (available at LPT centers).",
  },
  {
    title: "Receive Confirmation",
    description:
      "You will receive a confirmation, details, and instructions for the test from our team.",
  },
  {
    title: "Attempt the Test",
    description:
      "Take the CLAT scholarship test on the shared date and time.",
  },
];

const RegisterSection = () => {
  return (
    <section className="register-section py-5">
      <div className="container">

        <div className="row align-items-start g-4">

          {/* Left Content */}

          <div className="col-lg-4">

            <h2 className="register-heading">
              How to Register for CLAT Scholarship Test?
            </h2>

            <p className="register-subtitle">
              Top performers have the chance to earn full scholarships for
              CLAT coaching.
            </p>

            <button className="btn register-btn">
              Attempt Now
            </button>

          </div>

          {/* Right Cards */}

          <div className="col-lg-8">

            <div className="row g-4">

              {steps.map((step, index) => (

                <div className="col-md-6" key={index}>

                  <div className="register-card">

                    <div className="register-icon">
                      <IoCheckmarkCircleOutline />
                    </div>

                    <div>

                      <h4 className="register-card-title">
                        {step.title}
                      </h4>

                      <p className="register-card-text mb-0">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RegisterSection;