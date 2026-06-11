export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  scope: string[];
  cover?: string;
  fullPreview?: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    slug: "liga-mercado-financeiro",
    title: "Liga de Mercado Financeiro",
    category: "Site institucional · UNESP",
    year: "2024",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962405/liga-mercado-financeiro-cover_aupp8m.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962405/liga-mercado-financeiro-full_yujqti.webp',
    summary:
      "Plataforma para divulgar a Liga de Mercado Financeiro da UNESP, com seções sobre missão, valores, projetos e relatos de membros.",
    scope: ["Identidade visual", "UX/UI Design", "Desenvolvimento Web"],
  },
  {
    slug: "engeali",
    title: "Engeali",
    category: "Empresa Júnior · Engenharia de Alimentos",
    year: "2024",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962403/engeali-cover_do0qkr.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962403/engeali-full_lzjs7e.webp',
    summary:
      "Site de consultoria para a empresa júnior de Engenharia de Alimentos da UNESP, focado em conversão de novos clientes.",
    scope: ["Landing Page", "Copywriting", "Integração WhatsApp"],
  },
  {
    slug: "dinter-educacao-matematica",
    title: "Dinter em Educação Matemática",
    category: "Programa de Doutorado",
    year: "2025",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962403/dinter-educacao-matematica-cover_r7rfnw.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962403/dinter-educacao-matematica-full_mud9vn.webp',
    summary:
      "Portal informativo do programa Dinter em parceria com IF Sertão e UNIVASF, comunicando o intercâmbio acadêmico.",
    scope: ["Arquitetura de informação", "CMS", "Acessibilidade"],
  },
  {
    slug: "unesp-pos-geografia",
    title: "UNESP Pós-Graduação Geografia",
    category: "Pós-Graduação · Rio Claro",
    year: "2025",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962404/unesp-pos-geografia-cover_dmjoxt.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962404/unesp-pos-geografia-full_rp0opm.webp',
    summary:
      "Site institucional do Programa de Pós-Graduação em Geografia da UNESP Rio Claro, com estrutura de menus complexa e bilíngue.",
    scope: ["Design Editorial", "Wordpress", "Multilíngue"],
  },
  {
    slug: "larhia",
    title: "Pesquisadores do LARHIA",
    category: "Laboratório de Pesquisa",
    year: "2025",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962404/larhia-cover_zlvfag.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962404/larhia-full_cu6qpr.webp',
    summary:
      "Divulgação científica dos estágios internacionais do LARHIA em parceria com universidades dos Estados Unidos.",
    scope: ["Storytelling", "Galeria", "Newsletter"],
  },
  {
    slug: "xvi-encontro",
    title: "XVI Encontro PPG",
    category: "Evento Acadêmico",
    year: "2025",
    cover: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962404/xvi-encontro-cover_qm3p0c.webp',
    fullPreview: 'https://res.cloudinary.com/dxbk6cgin/image/upload/v1776962405/xvi-encontro-full_nnwfb7.webp',
    summary:
      "Identidade e hotsite para o XVI Encontro do Programa de Pós-Graduação em Geociências e Meio Ambiente.",
    scope: ["Identidade do evento", "Hotsite", "Inscrições"],
  },
];