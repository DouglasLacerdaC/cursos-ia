import { Prisma } from '../src/shared/services/prisma';
// import { hashSync } from 'bcrypt';

async function main() {
  const course = await Prisma.courses.createMany({
    data: [
      {
        name: 'HTML e CSS Básico',
        certificate: 'true',
        description:
          'O curso de HTML e CSS básico é ideal para iniciantes que desejam aprender a estruturar e estilizar páginas web do zero. Os alunos aprenderão os fundamentos do HTML (HyperText Markup Language), entendendo como criar a estrutura de um site com títulos, parágrafos, listas, links e imagens. Além disso, explorarão o CSS (Cascading Style Sheets) para estilizar o visual das páginas, aplicando cores, fontes, espaçamentos e layouts responsivos. O curso também aborda a importância da semântica no HTML, técnicas de design responsivo e boas práticas para um código limpo e eficiente. Com uma abordagem prática, inclui exercícios e pequenos projetos para reforçar o aprendizado, permitindo que os alunos criem suas primeiras páginas web funcionais e atrativas.',
        price: 30.0,
        quantityHours: '6',
        bannerUrl:
          'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=5231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'JavaScript para Iniciantes',
        certificate: 'true',
        description:
          'Este curso é perfeito para quem quer dar os primeiros passos no mundo da programação com JavaScript. Os alunos aprenderão os conceitos fundamentais da linguagem, incluindo variáveis, operadores, estruturas de controle de fluxo e funções. Além disso, serão introduzidos à manipulação do DOM para interatividade em páginas web, eventos e chamadas assíncronas com Fetch API. Também serão abordados conceitos como arrays, objetos e loops, permitindo que os alunos desenvolvam aplicações dinâmicas. Com exercícios práticos e projetos guiados, o curso oferece uma introdução sólida ao JavaScript, preparando os participantes para aprofundar seus conhecimentos e explorar frameworks como React no futuro.',
        price: 50.0,
        quantityHours: '10',
        bannerUrl:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Python para Data Science',
        certificate: 'true',
        description:
          'Neste curso, os alunos aprenderão os fundamentos da linguagem Python aplicados à análise de dados e ciência de dados. O conteúdo abrange desde a instalação do ambiente de desenvolvimento até o uso de bibliotecas como NumPy, Pandas e Matplotlib para manipulação e visualização de dados. Além disso, serão explorados conceitos básicos de estatística e aprendizado de máquina utilizando a biblioteca Scikit-Learn. O curso apresenta estudos de caso reais, permitindo que os alunos pratiquem com dados do mundo real. Ao final, os participantes serão capazes de realizar análises exploratórias, criar gráficos e aplicar algoritmos de Machine Learning para resolver problemas de negócios e pesquisa científica.',
        price: 80.0,
        quantityHours: '12',
        bannerUrl:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Redes de Computadores e Segurança',
        certificate: 'true',
        description:
          'Curso voltado para quem deseja entender como funcionam as redes de computadores e os principais conceitos de segurança da informação. Os alunos aprenderão sobre protocolos de comunicação como TCP/IP, modelos de redes (OSI e Internet), configuração de roteadores e switches, além de fundamentos de segurança, como firewalls, criptografia e detecção de intrusos. Também serão abordadas técnicas de defesa contra ataques cibernéticos, como phishing, malware e ataques DDoS. O curso inclui práticas em ambientes simulados e estudo de vulnerabilidades comuns, preparando os alunos para atuar na proteção de redes corporativas e na administração segura de sistemas de TI.',
        price: 100.0,
        quantityHours: '15',
        bannerUrl:
          'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Desenvolvimento de Aplicações Mobile com React Native',
        certificate: 'true',
        description:
          'Este curso ensina como desenvolver aplicativos móveis multiplataforma usando React Native, um dos frameworks mais populares para desenvolvimento mobile. Os alunos aprenderão desde a configuração do ambiente de desenvolvimento até a criação de interfaces interativas utilizando componentes reutilizáveis. Serão abordados conceitos como gerenciamento de estado com Redux, navegação entre telas, consumo de APIs e armazenamento de dados local. O curso inclui projetos práticos, permitindo que os participantes desenvolvam um aplicativo funcional ao longo das aulas. Ideal para quem deseja ingressar no mercado de desenvolvimento mobile e criar apps para Android e iOS de maneira eficiente.',
        price: 120.0,
        quantityHours: '20',
        bannerUrl:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Banco de Dados SQL e NoSQL',
        certificate: 'true',
        description:
          'O curso de Banco de Dados SQL e NoSQL oferece uma introdução completa ao armazenamento e gerenciamento de dados. Os alunos aprenderão os fundamentos do SQL (Structured Query Language), incluindo consultas, manipulação de dados e modelagem de banco de dados relacional com MySQL e PostgreSQL. Também serão abordadas tecnologias NoSQL, como MongoDB, explorando suas vantagens e aplicações. Além disso, o curso cobre técnicas de indexação, otimização de consultas e segurança de banco de dados. Com atividades práticas e projetos reais, os alunos desenvolverão habilidades para trabalhar com diferentes modelos de dados, essencial para quem deseja atuar como DBA ou desenvolvedor backend.',
        price: 90.0,
        quantityHours: '14',
        bannerUrl:
          'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=5000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  });

  const users = await Prisma.users.createMany({
    data: [
      {
        email: 'ailton.l@gmail.com',
        name: 'Ailton Lima',
      },
      {
        email: 'maria.silva@gmail.com',
        name: 'Maria Silva',
      },
      {
        email: 'joao.pereira@gmail.com',
        name: 'João Pereira',
      },
      {
        email: 'ana.souza@gmail.com',
        name: 'Ana Souza',
      },
      {
        email: 'carlos.gomes@gmail.com',
        name: 'Carlos Gomes',
      },
      {
        email: 'alicia.lopes@gmail.com',
        name: 'Alicia Lopes',
      },
    ],
  });

  const reviews = await Prisma.reviews.createMany({
    data: [
      {
        courseId: 1,
        review: 'Gostei muito desse curso, aprendi bastante!',
        stars: 5,
        userId: 4,
      },
      {
        courseId: 1,
        review: 'Excelente curso! Explicações claras e conteúdo relevante.',
        stars: 5,
        userId: 5,
      },
      {
        courseId: 1,
        review: 'Adorei! O curso superou minhas expectativas.',
        stars: 5,
        userId: 6,
      },
      {
        courseId: 1,
        review: 'Achei o curso muito básico e não agregou muito.',
        stars: 2,
        userId: 1,
      },
      {
        courseId: 2,
        review: 'O curso foi ótimo! Aprendi muito e o material foi excelente.',
        stars: 5,
        userId: 4,
      },
      {
        courseId: 2,
        review: 'Muito bom! O conteúdo é bem detalhado e fácil de acompanhar.',
        stars: 5,
        userId: 3,
      },
      {
        courseId: 2,
        review: 'Recomendo! A didática do professor é excelente.',
        stars: 5,
        userId: 1,
      },
      {
        courseId: 3,
        review: 'O curso foi frustrante, não aprendi nada novo.',
        stars: 1,
        userId: 2,
      },
      {
        courseId: 3,
        review: 'O conteúdo era muito superficial, não valeu a pena.',
        stars: 2,
        userId: 5,
      },
      {
        courseId: 3,
        review: 'Infelizmente, o curso não atendeu às minhas expectativas.',
        stars: 2,
        userId: 1,
      },
    ],
  });

  console.info(course);
  console.info(users);
  console.info(reviews);
}

main()
  .then(async () => await Prisma.$disconnect())
  .catch(async () => await Prisma.$disconnect());
