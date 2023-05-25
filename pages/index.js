import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import Statement from "@/components/Statement";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Sticky from "@/components/Sticky";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Team />
      <Services />
      <Sticky />
      <Statement />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
