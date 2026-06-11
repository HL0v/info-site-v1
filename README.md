# Info Jr. - Site Institucional v2

Bem-vindo ao repositório do novo site institucional da **Info Jr. UNESP Rio Claro**. Este projeto foi idealizado para entregar uma plataforma digital de alto desempenho, que sirva tanto como um cartão de visitas para prospecção de clientes, quanto como uma vitrine de portfólio para os projetos da empresa.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema front-end para garantir escalabilidade, performance e a melhor experiência para os desenvolvedores e usuários finais:

*   **[Next.js 16](https://nextjs.org/)**: Framework React para renderização híbrida (SSR/SSG), roteamento App Router, otimização de imagens e máxima performance em SEO.
*   **[React 19](https://react.dev/)**: Biblioteca base de UI, utilizando os paradigmas mais recentes de server components e hooks otimizados.
*   **[Tailwind CSS v4](https://tailwindcss.com/)**: Engine de estilização orientada a utilitários, utilizando as mais novas funcionalidades (CSS nativo, `@theme`) para personalização de design system e fluidez na criação de componentes.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo segurança de código e facilidade de manutenção.

## 🎨 Identidade Visual e Design

A interface foi elaborada sob uma forte e marcante identidade visual (descrita internamente em `visualID.md` e aplicada via CSS global), empregando o uso de **Glassmorphism**, contornos suaves, sombras profundas e transições fluídas para criar uma experiência premium e moderna.

### Tipografia
*   A fonte padrão utilizada em todo o projeto é a **Helvetica**, oferecendo clareza e alta legibilidade em todas as interfaces.

### Paleta de Cores
O design system usa variáveis de cor personalizadas bem definidas e enraizadas no CSS da aplicação:

*   **Verde Caitee (`--caitee-green`)**: `#56bc97` - Usado para detalhes, botões secundários, ícones e destaques.
*   **Azul Royal (`--royal-blue`)**: `#002366` - Tom profundo usado em fundos iluminados e detalhes institucionais fortes.
*   **Verde Destaque (`--highlighted-text`)**: `#6ce437` - Um verde brilhante para *Call to Actions* (CTAs), tipografia gradiente e feedbacks de sucesso.
*   **Azul Intel (`--intel-blue`)**: `#4462f6` - Tom alternativo de azul para enriquecimento do layout.
*   **Navy Meia-noite (`--midnight-navy`)**: `#0A1526` - Tons contrastantes e profundos.
*   **Tons Claros**: `--not-white` (`#F4F6F9`) e `--ghost-white` (`#fcfcfc`) para o fundo suave da aplicação, criando um contraste elegante com os cards em efeito *glass* (vidro).

### Elementos de UI / UX
*   **Componentes de Vidro (Glassmorphism)**: Backgrounds brancos/transparentes com fortes desfoques de fundo (`backdrop-blur-3xl`), contrastando contra círculos de iluminação colorida abstratos (usando as cores da marca).
*   **Animações Personalizadas**: Foram registradas e aplicadas diversas animações pontuais como *knock-in*, *knock-out*, expanders de linhas para sublinhados, garantindo que o site transmita a sensação de ser "vivo" e interativo.
*   **Estrutura de Rotas**:
    *   `/` (Home): Focada em conversão, apresentação de serviços, parceiros e depoimentos.
    *   `/servicos`: Landing pages específicas e aprofundadas dos serviços prestados.
    *   `/portfolio`: Vitrine digital dos projetos já construídos pela Info Jr.
    *   `/sobre`: Cultura, membros e história da empresa.

## 💻 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/SUA_ORG/info-site.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://127.0.0.1:3000` no seu navegador.

---
*Desenvolvido com 💚 pela Info Jr. UNESP Rio Claro.*
