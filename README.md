# 🌿 Viver & Ser

<img width="1667" height="892" alt="image" src="https://github.com/user-attachments/assets/b15e2e17-4c7a-4db8-b63c-6ed02889befb" />


Site institucional desenvolvido para a **Viver & Ser**, um espaço voltado ao acolhimento, autoconhecimento e terapias integrativas.

O projeto foi desenvolvido com foco em uma experiência leve, acolhedora e responsiva, traduzindo a identidade visual da Viver & Ser para o ambiente digital.

## ✨ Sobre o projeto

A proposta do site é apresentar a Viver & Ser, sua abordagem e os serviços oferecidos, criando um canal simples entre o público e a profissional.

Entre os serviços apresentados estão:

- Psicoterapia Junguiana
- Terapia Somática
- Reiki
- Tarot
- Registros Akáshicos
- Bordado Terapêutico
- Outras práticas integrativas

O projeto também possui integração com redes sociais e canais de contato.

## 🖥️ Funcionalidades

- Layout totalmente responsivo
- Menu desktop e menu hambúrguer no mobile
- Navegação por seções
- Apresentação dos serviços através de cards
- Seção "Quem sou eu"
- Integração com Instagram
- Contato direto pelo WhatsApp
- Botão flutuante do WhatsApp
- Botão "Voltar ao topo"
- Footer responsivo
- Animações durante a navegação
- Estrutura preparada para SEO

## 🛠️ Tecnologias

O projeto foi desenvolvido utilizando:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- HTML5
- CSS3

## 🎨 Identidade visual

A interface utiliza uma paleta inspirada em elementos naturais e terrosos:

| Cor | Hex |
| --- | --- |
| Verde Musgo | `#606C38` |
| Terracota | `#BC6C25` |
| Bege | `#FEFAE0` |
| Marrom Chocolate | `#432818` |

A tipografia principal utilizada no projeto é **EB Garamond**, reforçando a proposta orgânica e acolhedora da identidade visual.

## 📱 Responsividade

O projeto foi desenvolvido seguindo uma abordagem responsiva, adaptando componentes e conteúdos para diferentes tamanhos de tela.

No mobile, algumas alterações específicas são aplicadas para melhorar a experiência de navegação, incluindo:

- Menu hambúrguer
- Reorganização das seções
- Ajustes de tipografia e espaçamento
- Simplificação do footer
- Reposicionamento das imagens
- Ajustes de contraste no Hero

## 📂 Estrutura do projeto

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── BackToTop.tsx
│   ├── Button.tsx
│   ├── CardFooter.tsx
│   ├── CardService.tsx
│   ├── FloatingWpp.tsx
│   ├── FooterLinks.tsx
│   ├── InstagramCard.tsx
│   ├── Logo.tsx
│   ├── MainHero.tsx
│   └── Navbar.tsx
│
├── data/
│   ├── footer.ts
│   ├── instagram.ts
│   └── services.ts
│
├── sections/
│   ├── About.tsx
│   ├── AboutMe.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InstagramSection.tsx
│   └── Services.tsx
│
├── styles/
│   └── theme.css
│
├── App.tsx
├── index.css
└── main.tsx
```

## 🚀 Executando localmente

Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta:

```bash
cd viver-e-ser
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Para verificar o build de produção:

```bash
npm run build
```

## 🌐 Deploy

O projeto utiliza a **Vercel** para hospedagem e deploy contínuo.

Alterações enviadas para a branch principal do repositório podem gerar automaticamente uma nova versão de produção através da integração entre GitHub e Vercel.

## 🔎 SEO

A estrutura do projeto considera boas práticas para indexação e descoberta através de mecanismos de busca, incluindo HTML semântico, textos descritivos, atributos alternativos em imagens e estrutura adequada de títulos e seções.

O trabalho de SEO pode ser expandido continuamente através de metadados, conteúdo, sitemap, Search Console e otimizações de performance.

## 👩‍💻 Desenvolvimento

Projeto desenvolvido por **Lorenna Dias**.

Desenvolvido como projeto real para cliente e também como parte de portfólio de desenvolvimento Front-End.

---

© 2026 Viver & Ser. Todos os direitos reservados.
