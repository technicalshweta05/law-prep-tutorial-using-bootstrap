import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const TestSection = () => {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div
                    className="mx-auto rounded-4 shadow-sm p-4 p-md-5 text-center"
                    style={{
                        maxWidth: "1280px",
                        background: "#fff",
                    }}
                >
                    {/* Badge */}
                    <span
                        className="badge rounded-pill px-4 py-3 mb-4"
                        style={{
                            background: "#F7C9CF",
                            color: "#E5252A",
                            fontSize: "16px",
                            fontWeight: "600",
                        }}
                    >
                        India's Biggest
                    </span>

                    {/* Heading */}
                    <h2
                        className="fw-bold mb-4"
                        style={{
                            fontSize: "3rem",
                            color: "#0A0A0A",
                        }}
                    >
                        CLAT Scholarship Test 2027-2028
                    </h2>

                    {/* Description */}
                    <p
                        className="mx-auto mb-5"
                        style={{
                            maxWidth: "980px",
                            fontSize: "1.4rem",
                            lineHeight: "1.7",
                            color: "#222",
                        }}
                    >
                        Take the CLAT Scholarship Test and earn up to 100% scholarship on
                        India's most trusted CLAT coaching programs—available online and
                        offline. Don't let fees stand in your way; prove your potential and
                        get the best guidance to crack CLAT!
                    </p>

                    {/* Buttons */}
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mt-5">

                        <button type="button" className="btn test-btn-primary">
                            Attempt Now
                        </button>

                        <button type="button" className="btn test-btn-outline">
                            <BsPlayCircle className="me-2 fs-4" />
                            <span>How it Works</span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestSection;