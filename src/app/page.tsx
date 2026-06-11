import Hero from "@/uiComponents/Hero/Hero";
import Header from "../uiComponents/Header/Header";
import CTA from "@/uiComponents/CTA/CTA";
import ServiceCards from "@/uiComponents/ServiceCards/ServiceCards";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ServiceCards/>
      <CTA/>
    </>
  );
}
