import PortfolioHero from "./PortfolioComponents/PortfolioHero/PortfolioHero";
import ProjectsGrid from "./PortfolioComponents/ProjectsGrid/ProjectsGrid";

export const metadata = {
  title: "Portfólio | Info Jr.",
  description: "Conheça nosso portfólio digital e os projetos que desenvolvemos para marcas e instituições.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ProjectsGrid />
    </>
  );
}