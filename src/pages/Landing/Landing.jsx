import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import ProblemSection from "../../components/common/ProblemSection";
import Features from "../../components/common/Features";
import HowItWorks from "../../components/common/HowItWorks";
import DashboardPreview from "../../components/common/DashboardPreview";
import Testimonials from "../../components/common/Testimonials";
import CTA from "../../components/common/CTA";
import Footer from "../../components/common/Footer";
const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <CTA />
      <Footer/>
    </>
  );
};

export default Landing;