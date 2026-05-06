export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  githubUrl?: string;
  year: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "modelo-preditivo",
    title: "Modelo Preditivo",
    shortDescription:
      "Modelo preditivo de Machine Learning para previsões de total de emissões.",
    fullDescription:
      "Desenvolvi este projeto com o objetivo de prever o volume mensal de emissões de documentos fiscais de um cliente, utilizando dados históricos reais e aplicando técnicas de análise de dados e machine learning. O foco principal foi criar uma solução que não apenas tivesse boa performance estatística, mas que também gerasse valor prático para o negócio, auxiliando na antecipação de demandas, planejamento financeiro e dimensionamento de infraestrutura. O projeto foi construído em Python e percorreu todas as etapas de um pipeline completo de dados. Inicialmente, realizei o tratamento e organização dos dados, garantindo consistência temporal e lidando com lacunas na base. Em seguida, conduzi uma análise exploratória para entender o comportamento das emissões ao longo do tempo e identificar padrões relevantes. A etapa mais importante foi a engenharia de features, com variáveis temporais como médias móveis, lags, taxas de crescimento, aceleração e indicadores de pico recente, sempre evitando data leakage. Foram testados modelos como Regressão Linear e Random Forest; a Regressão Linear apresentou melhor desempenho para o problema e o modelo final atingiu aproximadamente 10,5% de MAPE.",
    technologies: [
      "Python",
      "SQL Server",
      "Machine Learning",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib"
    ],
    coverImage: "/imagens/logo_modelo.avif",
    gallery: [
      "/imagens/galeria_modelo/notebook-modelo.png",
      "/imagens/galeria_modelo/grafico-modelo.png"
    ],
    githubUrl: "https://github.com/DaviBachmann/previsao-emissoes",
    year: "2026",
    highlights: [
      "Construção de pipeline completo de dados em Python",
      "Desenvolvimento de features temporais",
      "Identificação e correção de data leakage",
      "Comparação entre Regressão Linear e Random Forest",
      "Otimização iterativa baseada em MAPE, MAE e RMSE"
    ]
  },
  {
    id: 2,
    slug: "alertas-monitoramento",
    title: "Alertas de Monitoramento",
    shortDescription:
      "Automação de alertas em Python para monitoramento de diferentes atividades.",
    fullDescription:
      "Desenvolvimento de um programa em Python para automação de alertas de monitoramento fiscal, com conexão a banco de dados, execução de regras complexas de filtragem e envio automatizado por e-mail. A solução foi planejada de forma modular e reutilizável, permitindo a criação de múltiplos alertas a partir de uma mesma base de código. Inicialmente idealizado para monitorar notas fiscais destinadas não manifestadas, o projeto evoluiu para atender outras demandas semelhantes com mínima adaptação. Cada alerta utiliza uma estrutura central que executa periodicamente uma query SQL, identifica ocorrências críticas e dispara e-mails para os responsáveis com informações relevantes. As variáveis são armazenadas em arquivos .env, facilitando a manutenção de senhas e credenciais.",
    technologies: ["Python", "SQL Server", "Pandas", "SMTP"],
    coverImage: "/imagens/logo_alerta_monitoramento.png",
    gallery: [
      "/imagens/galeria_alerta/Screenshot_Email_Vivo.png",
      "/imagens/galeria_alerta/Screenshot_Email_Alerta.png",
      "/imagens/galeria_alerta/Screenshot_Planilha_Alerta.png"
    ],
    githubUrl: "https://github.com/DaviBachmann/alertas-monitoramento",
    year: "2025",
    highlights: [
      "Estrutura modular para múltiplos alertas",
      "Conexão com banco de dados e regras de negócio",
      "Envio automatizado de e-mails",
      "Execução periódica sem intervenção manual"
    ]
  },
  {
    id: 3,
    slug: "extrator-xml",
    title: "Extrator de XML",
    shortDescription:
      "Programa para realizar download de milhões de XMLs utilizando threads e conexões com API.",
    fullDescription:
      "Desenvolvimento de um programa em Python com multithreading, conexão a banco de dados e consumo de APIs para download massivo de documentos XML. O projeto surgiu ao perceber a ineficiência do método antigo de download via PowerShell, que limitava a operação a cerca de 10 mil XMLs por hora. A nova abordagem viabilizou o download de até 100 mil documentos no mesmo intervalo de tempo, com uma melhoria expressiva de produtividade. O programa permite diferentes métodos para inserção da chave de acesso, coleta dados diretamente do banco em tempo real e realiza downloads em paralelo. A performance final pode variar conforme o hardware e a estabilidade da conexão.",
    technologies: ["Python", "SQL Server", "API", "Multithreading"],
    coverImage: "/imagens/logo_extrator_xml.png",
    gallery: [
      "/imagens/galeria_extrator/Screenshot_Extrator-XML.png",
      "/imagens/galeria_extrator/Screenshot_Extrator_Input.png",
      "/imagens/galeria_extrator/Screenshot_Extrator_DBConfig.png",
      "/imagens/galeria_extrator/Screenshot_Extrator_Pastas.png",
      "/imagens/galeria_extrator/Screenshot_Extrator_XMLs.png"
    ],
    githubUrl: "https://github.com/DaviBachmann/extrator-xml",
    year: "2024",
    highlights: [
      "Interação com usuário",
      "Variedade de opções para coleta da chave de acesso",
      "Conexão com banco para coleta em tempo real",
      "Otimização com threads para downloads simultâneos"
    ]
  },
  {
    id: 4,
    slug: "manutencao-usuarios",
    title: "Programa de Manutenção de Usuários",
    shortDescription:
      "Um programa para facilitar o cadastro e desativação de usuários administradores.",
    fullDescription:
      "Desenvolvimento de uma aplicação em Python para padronizar e automatizar o processo de criação e desativação de usuários administradores nas bases da empresa. O projeto nasceu da necessidade de aumentar a segurança e a praticidade na gestão de acessos administrativos. Com a ferramenta, é possível criar rapidamente um usuário com o mesmo login e senha em múltiplas bases, garantindo consistência e economia de tempo. A funcionalidade de desativação centralizada permite encerrar acessos de forma ágil e padronizada, reduzindo riscos de segurança em cenários sensíveis.",
    technologies: ["Python", "SQL Server"],
    coverImage: "/imagens/logo_manutencao_usuario.jpg",
    gallery: [
      "/imagens/galeria_usuario/Screenshot_Cadastro_Usuario.png",
      "/imagens/galeria_usuario/Screenshot_Desativacao_Usuario.png",
      "/imagens/galeria_usuario/Screenshot_Evidencia_Usuario.png"
    ],
    githubUrl: "https://github.com/DaviBachmann/manutencao-usuario",
    year: "2025",
    highlights: [
      "Padronização automática de login e senha",
      "Ações simultâneas em diversas bases",
      "Centralização do controle de acessos",
      "Desativação rápida de acessos",
      "Código modular e reutilizável"
    ]
  },
  {
    id: 5,
    slug: "dashboard-financeiro",
    title: "Dashboard Financeiro",
    shortDescription: "Um dashboard feito no Power BI para análise financeira.",
    fullDescription:
      "Desenvolvimento de um dashboard financeiro interativo no Power BI, com visual moderno e personalizado baseado em um layout criado no Figma. O projeto foi planejado com foco na clareza visual e performance analítica, trazendo indicadores financeiros essenciais para facilitar a tomada de decisão do time responsável. A coleta de dados é realizada por meio de scripts em Python que acessam múltiplos bancos de dados SQL Server, centralizando informações de diferentes clientes e bases. O projeto conta com limpeza e transformação automatizadas via Python e medidas DAX para indicadores como receita, inadimplência, entradas e saídas.",
    technologies: ["Power BI", "Python", "SQL Server", "Pandas", "Figma"],
    coverImage: "/imagens/logo_financeiro.png",
    gallery: [
      "/imagens/galeria_financeiro/Screenshot_Financeiro_Totais.png",
      "/imagens/galeria_financeiro/Screenshot_Financeiro_Detalhes.png",
      "/imagens/galeria_financeiro/Screenshot_Financeiro_Valores.png",
      "/imagens/galeria_financeiro/Screenshot_Financeiro_Saas.png",
      "/imagens/galeria_financeiro/Screenshot_Financeiro_Lasa.png"
    ],
    githubUrl: "https://github.com/DaviBachmann",
    year: "2025",
    highlights: [
      "Integração de múltiplos bancos SQL Server via Python",
      "Extração e limpeza de dados automatizadas",
      "Layout planejado e desenvolvido no Figma",
      "Indicadores financeiros estratégicos em DAX"
    ]
  }
];

export const featuredProjects = projects;
