import React from "react";
import { FaChevronDown } from "react-icons/fa";

const leftFaqs = [
  {
    question: "What is LPSAT?",
    answer:
      "LPSAT (Law Prep Scholarship cum Admission Test) is a scholarship test conducted by Law Prep to help students earn scholarships for CLAT coaching programs.",
  },
  {
    question: "Who can take LPSAT?",
    answer:
      "Students of Class 10th, 11th, 12th, droppers and CLAT aspirants can appear for the scholarship test.",
  },
  {
    question: "Is CLAT scholarship test available in both Hindi and English?",
    answer:
      "Yes. The scholarship test is available in both Hindi and English.",
  },
  {
    question: "What is the exam pattern for LPSAT?",
    answer:
      "The test consists of multiple-choice questions covering CLAT-related aptitude and reasoning.",
  },
  {
    question: "Is there any negative marking in LPSAT?",
    answer:
      "Yes. There is a negative marking of 0.25 marks for every incorrect answer.",
  },
];

const rightFaqs = [
  {
    question: "How much scholarship can I get through CLAT scholarship test?",
    answer:
      "Students can receive scholarships up to 100% based on their performance.",
  },
  {
    question: "What is the registration fee for LPSAT?",
    answer:
      "Registration fee may vary for each test. Please check the latest notification before applying.",
  },
  {
    question: "How do I know if I qualified for a scholarship?",
    answer:
      "Your scholarship result will be shared after evaluation of your performance.",
  },
  {
    question: "How is the scholarship percentage determined?",
    answer:
      "Scholarship percentage is decided based on your overall score and rank in the scholarship test.",
  },
];

const FaqSection = () => {
  return (
    <section className="faq-section py-5">

      <div className="container">

        <h2 className="faq-heading mb-5">
          FAQs About CLAT Scholarship Test 2027-28
        </h2>

        <div className="row g-4">

          {/* Left Column */}

          <div className="col-lg-6">

            <div className="accordion" id="leftFaq">

              {leftFaqs.map((faq, index) => (

                <div className="accordion-item faq-item mb-4" key={index}>

                  <h2 className="accordion-header">

                    <button
                      className={`accordion-button faq-btn ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#left${index}`}
                    >
                      {faq.question}
                    </button>

                  </h2>

                  <div
                    id={`left${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#leftFaq"
                  >

                    <div className="accordion-body faq-answer">
                      {faq.answer}
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Column */}

          <div className="col-lg-6">

            <div className="accordion" id="rightFaq">

              {rightFaqs.map((faq, index) => (

                <div className="accordion-item faq-item mb-4" key={index}>

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed faq-btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#right${index}`}
                    >
                      {faq.question}
                    </button>

                  </h2>

                  <div
                    id={`right${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#rightFaq"
                  >

                    <div className="accordion-body faq-answer">
                      {faq.answer}
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

export default FaqSection;