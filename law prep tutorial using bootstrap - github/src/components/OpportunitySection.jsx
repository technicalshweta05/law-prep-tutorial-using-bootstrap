import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const OpportunitySection = () => {
  return (
    <section className="py-5 bg-white">

      <div className="container">

        <div className="opportunity-wrapper">

          <div className="row align-items-center g-5">

            {/* Left Content */}

            <div className="col-lg-6">

              <h2 className="opportunity-heading">
                Share this Opportunity with Your Friends!
              </h2>

              <p className="opportunity-text">
                Help your friends and peers by sharing this scholarship test.
                They too can benefit from up to 100% off on CLAT coaching and
                take a step toward their legal career dreams.
              </p>

              <button className="d-flex align-items-center justify-content-center opportunity-btn">
                <FaWhatsapp className="me-2" />
                WhatsApp
              </button>

            </div>

            {/* Right Image */}

            <div className="col-lg-6 text-center">

              <img
                src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/live-demo.png"
                alt="Opportunity"
                className="img-fluid opportunity-img"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OpportunitySection;