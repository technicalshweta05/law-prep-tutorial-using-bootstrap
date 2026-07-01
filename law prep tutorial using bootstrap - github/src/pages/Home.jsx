import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TestSection from "../components/TestSection";
import ScholarshipSection from "../components/ScholarshipSection";
import ClatScholarship from "../components/ClatScholarship";
import AttemptSection from "../components/AttemptSection";
import Toppers from "../components/Toppers";
import ClatToppers from "../components/ClatToppers";
import RegisterSection from "../components/RegisterSection";
import ApplySection from "../components/ApplySection";
import ChooseSection from "../components/ChooseSection";
import FaqSection from "../components/FaqSection";
import OpportunitySection from "../components/OpportunitySection";
import ClatExamSection from "../components/ClatExamSection";
import WhySection from "../components/WhySection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TestSection/>
      <ScholarshipSection/>
      <ClatScholarship/>
      <AttemptSection/>
      <Toppers/>
      <ClatToppers/>
      <RegisterSection/>
      <ApplySection/>
      <ChooseSection/>
      <FaqSection/>
      <OpportunitySection/>
      <ClatExamSection/>
      <WhySection/>
      <Footer/>
    </>
  );
};

export default Home;