import ServiceHero from "./ServicoComponents/ServiceHero/ServiceHero";
import WebsitesSection from "./ServicoComponents/WebsitesSection/WebsitesSection";
import SystemsSection from "./ServicoComponents/SystemsSection/SystemsSection";
import ConsultancySection from "./ServicoComponents/ConsultancySection/ConsultancySection";

export const metadata = {
  title: "Nossos Serviços | Info Jr.",
  description: "Conheça nossas soluções em sites de alta conversão, sistemas web sob medida e consultoria estratégica em TI.",
};

export default function ServicosPage() {
  return (
    <>
      <ServiceHero />
      <WebsitesSection />
      <SystemsSection />
      <ConsultancySection />
    </>
  );
}
