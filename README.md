# Portfólio Davi Bachmann

Portfólio profissional em Next.js para apresentar projetos, certificados, currículo e formas de contato nas áreas de Data Science, Análise de Dados, Automação e Desenvolvimento Python.

## Stack

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree
- Deploy pela Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

Para validar produção localmente:

```bash
npm run lint
npm run build
npm run start
```

## Estrutura principal

- `src/app` contém as rotas da aplicação.
- `src/components` contém as seções e componentes reutilizáveis.
- `src/data/projects.ts` contém os projetos exibidos na home e nas páginas dinâmicas.
- `src/data/certificates.ts` contém os certificados e filtros.
- `src/data/site.ts` contém textos fixos, links sociais, habilidades e endpoint do formulário.
- `public/imagens` contém imagens, logos, certificados e galerias.
- `public/assets` contém PDFs de certificados e currículo.

## Como editar projetos

Edite `src/data/projects.ts`.

Cada projeto precisa de:

- `slug`, usado na URL `/projetos/[slug]`
- `title`
- `shortDescription`
- `fullDescription`
- `technologies`
- `coverImage`
- `gallery`
- `githubUrl`
- `year`
- `highlights`

As imagens devem ficar em `public/imagens` e ser referenciadas com caminho absoluto, por exemplo:

```ts
coverImage: "/imagens/logo_modelo.avif"
```

## Como editar certificados

Edite `src/data/certificates.ts`.

As categorias disponíveis são:

- `principais`
- `datascience`
- `powerbi`
- `bibliotecas-python`
- `outros`

Imagens de certificados ficam em `public/imagens/certificados`. PDFs ficam em `public/assets`.

## Formulário de contato

O formulário usa Formspree com o endpoint configurado em `src/data/site.ts`:

```ts
formspreeEndpoint: "https://formspree.io/f/mdkdzvge"
```

Para trocar o formulário, substitua esse valor pelo novo endpoint do Formspree.

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Importe o projeto na Vercel.
3. Selecione este repositório.
4. Use os comandos padrão:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output: gerenciado pelo Next.js
5. Faça o deploy.

Opcionalmente, configure a variável `NEXT_PUBLIC_SITE_URL` na Vercel com a URL final do site, por exemplo `https://seu-projeto.vercel.app`. Ela é usada para resolver imagens de Open Graph e SEO social.

## Observações de migração

- As páginas antigas `index.html`, `certificados.html` e `projeto.html?id=...` foram substituídas por rotas Next.js.
- As páginas de projeto agora usam URLs amigáveis, como `/projetos/modelo-preditivo`.
- Os screenshots BMP do Extrator de XML foram convertidos para PNG em `public/imagens/galeria_extrator`.
- O visual mantém a paleta, tipografia, textura e personalidade do portfólio original, com uma composição mais minimalista, responsiva e interativa.
