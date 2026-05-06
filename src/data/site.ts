import {
  BarChart3,
  BrainCircuit,
  Database,
  FileSpreadsheet,
  NotebookTabs,
  Workflow
} from "lucide-react";

export const site = {
  name: "Davi Bachmann",
  brand: "Bachmann.",
  title: "Davi Bachmann - Portfólio",
  description:
    "Portfólio de Davi Bachmann com projetos de Data Science, análise de dados, automação em Python e Power BI.",
  formspreeEndpoint: "https://formspree.io/f/mdkdzvge",
  resumePath: "/assets/Curriculo-DaviBachmann.pdf",
  socials: {
    github: "https://github.com/DaviBachmann",
    linkedin: "https://www.linkedin.com/in/davi-bachmann-765b79311/",
    email: "mailto:davibachmann0904@gmail.com"
  },
  nav: [
    { label: "Início", href: "/#inicio" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Projetos", href: "/#projetos" },
    { label: "Certificados", href: "/#certificados" },
    { label: "Habilidades", href: "/#habilidades" },
    { label: "Contato", href: "/#contato" }
  ],
  hero: {
    title: "Olá! Sou Davi Bachmann",
    description:
      "Sou Davi Bachmann, cientista de dados em formação, com foco em projetos práticos que envolvem análise, visualização e modelagem de dados."
  },
  about: [
    "Sou um cientista de dados em início de jornada, apaixonado por tecnologia, análise de dados e seu potencial de transformação. Tenho me dedicado a desenvolver habilidades em análise exploratória, visualização de dados e modelagem preditiva, com interesse especial na aplicação de dados na área da saúde e esporte.",
    "Busco aplicar com proatividade o conhecimento que venho adquirindo em cursos e formações em projetos para desenvolver minhas habilidades práticas em ferramentas constantemente utilizadas em Ciência de Dados.",
    "Atualmente, trabalho com tecnologias como Python, SQL Server, Jupyter e Power BI. Sempre estou aprendendo algo novo para evoluir cada vez mais como data scientist."
  ]
};

export const skills = [
  {
    name: "SQL Server",
    level: "Avançado",
    color: "#82CD47",
    icon: Database,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
  },
  {
    name: "Python",
    level: "Intermediário",
    color: "#FFB200",
    icon: Workflow,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Jupyter",
    level: "Intermediário",
    color: "#FFB200",
    icon: NotebookTabs,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
  },
  {
    name: "Power BI",
    level: "Intermediário",
    color: "#FFB200",
    icon: BarChart3,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
  },
  {
    name: "Pandas",
    level: "Intermediário",
    color: "#FFB200",
    icon: FileSpreadsheet,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    name: "NumPy",
    level: "Aprendendo",
    color: "#0F6292",
    icon: BrainCircuit,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  }
];
