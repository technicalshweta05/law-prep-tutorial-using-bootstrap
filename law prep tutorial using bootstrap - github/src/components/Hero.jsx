import React from "react";

const Hero = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "#FDF0EA",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Left Image */}
          <div className="col-lg-8">
            <img
              src="https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/11/20620_header_image__1300-x-921-1.webp"
              alt="Scholarship"
              className="img-fluid rounded-4 w-100"
            />
          </div>

          {/* Right Form */}
          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5">

              <h2
                className="fw-bold text-center mb-4"
                style={{
                  fontSize: "2rem",
                  lineHeight: "1.3",
                }}
              >
                Book Your Spot for
                <br />
                Scholarship Test
              </h2>

              <form>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Enter Name *"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-3"
                    placeholder="Enter Email Address *"
                  />
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      +91
                    </span>

                    <input
                      type="text"
                      className="form-control py-3"
                      placeholder="Enter Mobile Number *"
                    />
                  </div>
                </div>

                <div className="row g-2 mb-4">

                  <div className="col-6">
                    <div
                      className="border rounded d-flex align-items-center justify-content-center"
                      style={{ height: "44px" }}
                    >
                      <strong>6e034f</strong>
                    </div>
                  </div>

                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Captcha"
                    />
                  </div>

                </div>

                <button
                  className="btn btn-danger w-100 py-3 fw-semibold"
                  type="submit"
                >
                  Submit
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;