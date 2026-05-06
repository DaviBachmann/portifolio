export type CertificateCategory =
  | "principais"
  | "datascience"
  | "powerbi"
  | "bibliotecas-python"
  | "outros";

export type Certificate = {
  id: string;
  title: string;
  institution: string;
  year: string;
  hours: string;
  description: string;
  categories: CertificateCategory[];
  logo: string;
  image: string;
  pdf: string;
};

const dsaLogo = "/imagens/DSA-Logo.png";
const aluraLogo = "/imagens/ALURA-Logo.jpeg";

export const certificates: Certificate[] = [
  {
    id: "python-data-science-intermediario",
    title: "Python para Data Science Intermediário",
    institution: "Data Science Academy",
    year: "2025",
    hours: "72 horas",
    description:
      "Curso de Python focado em Data Science utilizando bibliotecas de visualização, deep learning e machine learning para análise preditiva.",
    categories: ["principais", "datascience"],
    logo: dsaLogo,
    image: "/imagens/certificados/certificate-python-intermediario-DSA.png",
    pdf: "/assets/certificate-python-para-data-science-intermediario-DSA.pdf"
  },
  {
    id: "python-data-science-basico",
    title: "Python para Data Science Básico",
    institution: "Data Science Academy",
    year: "2025",
    hours: "48 horas",
    description: "Curso sobre conhecimentos básicos de Python.",
    categories: ["datascience"],
    logo: dsaLogo,
    image: "/imagens/certificados/certificate-python-basico-DSA.png",
    pdf: "/assets/certificate-python-para-data-science-basico-DSA.pdf"
  },
  {
    id: "python-data-science-introdutorio",
    title: "Python para Data Science Introdutório",
    institution: "Data Science Academy",
    year: "2025",
    hours: "24 horas",
    description: "Curso sobre conhecimentos introdutórios de Python.",
    categories: ["datascience"],
    logo: dsaLogo,
    image: "/imagens/certificados/certificate-python-introdutorio-DSA.png",
    pdf: "/assets/certificate-python-para-data-science-introdutorio-DSA.pdf"
  },
  {
    id: "power-bi-data-science",
    title: "Power BI para Data Science",
    institution: "Data Science Academy",
    year: "2024",
    hours: "72 horas",
    description: "Curso completo de Power BI para Data Science.",
    categories: ["principais", "powerbi"],
    logo: dsaLogo,
    image: "/imagens/certificados/certificate-power-bi-para-data-science.png",
    pdf: "/assets/certificate-power-bi-para-data-science-DSA.pdf"
  },
  {
    id: "numpy-analise-numerica",
    title: "NumPy: Análise numérica eficiente",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description:
      "Curso de introdução à biblioteca NumPy para análise numérica eficiente com Python.",
    categories: ["principais", "bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-numpy-ALURA.png",
    pdf: "/assets/certificate-numpy-ALURA.pdf"
  },
  {
    id: "pandas-tratando-analisando",
    title: "Pandas: Tratando e Analisando Dados",
    institution: "Alura",
    year: "2024",
    hours: "12 horas",
    description: "Curso da biblioteca Pandas para manipulação de dados.",
    categories: ["principais", "bibliotecas-python"],
    logo: aluraLogo,
    image:
      "/imagens/certificados/certificate-pandas-tratamento-de-dados-ALURA.png",
    pdf: "/assets/certificate-pandas-tratamento-de-dados-ALURA.pdf"
  },
  {
    id: "power-bi-primeiro-dashboard",
    title: "Power BI: Meu Primeiro Dashboard",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso de introdução ao Power BI para montagem de dashboard.",
    categories: ["principais", "powerbi"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-powerbi-primeiro-dash-ALURA.png",
    pdf: "/assets/certificate-powerbi-primeiro-dash-ALURA.pdf"
  },
  {
    id: "python-data-science-primeiros-passos",
    title: "Python para Data Science: Primeiros Passos",
    institution: "Alura",
    year: "2023",
    hours: "10 horas",
    description: "Curso base para Data Science com Python.",
    categories: ["principais", "datascience"],
    logo: aluraLogo,
    image:
      "/imagens/certificados/certificate-python-para-data-science-ALURA.png",
    pdf: "/assets/certificate-python-para-data-science-ALURA.pdf"
  },
  {
    id: "pandas-conhecendo",
    title: "Pandas: Conhecendo a Biblioteca",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso básico para ingressar na biblioteca Pandas.",
    categories: ["bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-pandas-conhecendo-ALURA.png",
    pdf: "/assets/certificate-pandas-conhecendo-ALURA.pdf"
  },
  {
    id: "pandas-selecionando-agrupando",
    title: "Pandas: Selecionando e Agrupando Dados",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso para aprofundamento em Pandas.",
    categories: ["bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-pandas-selecionando-ALURA.png",
    pdf: "/assets/certificate-pandas-selecionando-ALURA.pdf"
  },
  {
    id: "pandas-io",
    title: "Pandas I/O: Trabalhando com Diferentes Formatos de Arquivos",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso para tratamento de diferentes arquivos com Pandas.",
    categories: ["bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-pandas-io-ALURA.png",
    pdf: "/assets/certificate-pandas-io-ALURA.pdf"
  },
  {
    id: "pandas-transformacao-manipulacao",
    title: "Pandas: Transformação e Manipulação de Dados",
    institution: "Alura",
    year: "2024",
    hours: "6 horas",
    description:
      "Curso para desenvolver transformação e manipulação de dados com Pandas.",
    categories: ["bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-pandas-manipulacao-ALURA.png",
    pdf: "/assets/certificate-pandas-manipulacao-ALURA.pdf"
  },
  {
    id: "power-bi-dax",
    title: "Power BI: Construindo Cálculos com DAX",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso para aperfeiçoamento de cálculos DAX do Power BI.",
    categories: ["powerbi"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-powerbi-dax-ALURA.png",
    pdf: "/assets/certificate-powerbi-dax-ALURA.pdf"
  },
  {
    id: "power-bi-etl",
    title: "Power BI: Realizando ETL no Power Query",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso para aperfeiçoamento de ETL com Power BI.",
    categories: ["powerbi"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-powerbi-etl-ALURA.png",
    pdf: "/assets/certificate-powerbi-etl-ALURA.pdf"
  },
  {
    id: "python-funcoes-estruturas",
    title: "Python para Data Science: Funções, Estruturas de Dados e Exceções",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso para aperfeiçoamento de Python para Data Science.",
    categories: ["datascience"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-python-func-ALURA.png",
    pdf: "/assets/certificate-python-func-ALURA.pdf"
  },
  {
    id: "data-science-analise-visualizacao",
    title: "Data Science: Análise e Visualização de Dados",
    institution: "Alura",
    year: "2024",
    hours: "6 horas",
    description: "Curso sobre visualização de dados com PyPlot para Data Science.",
    categories: ["datascience"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-python-visu-ALURA.png",
    pdf: "/assets/certificate-python-visu-ALURA.pdf"
  },
  {
    id: "pandas-limpeza-tratamento",
    title: "Pandas: Limpeza e Tratamento de Dados",
    institution: "Alura",
    year: "2024",
    hours: "8 horas",
    description: "Curso sobre limpeza e tratamento de dados com Pandas.",
    categories: ["bibliotecas-python"],
    logo: aluraLogo,
    image: "/imagens/certificados/certificate-pandas-limpeza-ALURA.png",
    pdf: "/assets/certificate-pandas-limpeza-ALURA.pdf"
  },
  {
    id: "fundamentos-data-science-ia",
    title: "Fundamentos de Data Science e Inteligência Artificial",
    institution: "Data Science Academy",
    year: "2025",
    hours: "12 horas",
    description:
      "Curso introdutório sobre fundamentos de Data Science e Inteligência Artificial.",
    categories: ["outros", "datascience"],
    logo: dsaLogo,
    image:
      "/imagens/certificados/certificate-fundamentos-de-data-science-e-inteligencia-artificial-DSA.png",
    pdf:
      "/assets/certificate-fundamentos-de-data-science-e-inteligencia-artificial-DSA.pdf"
  }
];

export const certificateFilters: { label: string; value: CertificateCategory }[] = [
  { label: "Principais", value: "principais" },
  { label: "Data Science", value: "datascience" },
  { label: "Power BI", value: "powerbi" },
  { label: "Bibliotecas Python", value: "bibliotecas-python" },
  { label: "Outros", value: "outros" }
];

export const featuredCertificates = certificates.filter((certificate) =>
  certificate.categories.includes("principais")
);
