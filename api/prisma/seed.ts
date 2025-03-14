import { Prisma } from '../src/shared/services/prisma';
// import { hashSync } from 'bcrypt';

async function main() {
  // const user = await prisma.users.create({
  //   data: {
  //     name: ' User',
  //     email: 'user@ntec.com',
  //   },
  // });

  const course = await Prisma.courses.createMany({
    data: [
      {
        name: ' Curso de Bitcoin',
        certificate: 'true',
        description:
          'Você já imaginou transformar paredes comuns em verdadeiras obras de arte? No Curso Profissionalizante de Pintura e Técnicas de Acabamento, você aprenderá desde os fundamentos da pintura até as técnicas mais avançadas para criar efeitos sofisticados em diferentes superfícies. \n Nosso curso é voltado para iniciantes e profissionais que desejam aprimorar suas habilidades, oferecendo uma abordagem completa sobre materiais, ferramentas e métodos de aplicação. Ao longo das aulas, você aprenderá a escolher tintas e texturas adequadas para cada ambiente, garantindo um acabamento impecável.',
        price: 30.0,
        quantityHours: '6',
        bannerUrl:
          'https://img.freepik.com/fotos-gratis/closeup-de-bitcoins-dourados-em-uma-superficie-reflexiva-escura-e-o-histograma-de-criptografia-decrescente_1268-19910.jpg?t=st=1741976087~exp=1741979687~hmac=99ccfacbd3575ecbfd4282ee1baccd2f3f69ef2252654d465a4a99e5dee56f28&w=2000',
      },
      {
        name: 'Inimigo do Wesley (Typescript)',
        certificate: 'true',
        description:
          'O TypeScript é uma linguagem de programação que tem ganhado popularidade no ecossistema de desenvolvimento, especialmente entre desenvolvedores que já utilizam JavaScript. Por ser uma linguagem fortemente tipada, TypeScript agrega inúmeras vantagens à programação, especialmente no que se refere à manutenção de código, escalabilidade de sistemas e, consequentemente, à produtividade da equipe de desenvolvimento. A seguir, será discutido como um curso de TypeScript genérico pode ser essencial para a formação de desenvolvedores e para a construção de sistemas mais robustos e eficientes.',
        price: 30.0,
        quantityHours: '2',
        bannerUrl:
          'https://img.freepik.com/fotos-gratis/fotografia-lateral-de-um-editor-de-codigo-usando-react-js_181624-61842.jpg?t=st=1741976109~exp=1741979709~hmac=30cd12e186b68ff2d783f93a6c130160c3c374b548d0ed2bfad48d685a8e62d9&w=2000',
      },
    ],
  });

  console.info(course);
}

main()
  .then(async () => await Prisma.$disconnect())
  .catch(async () => await Prisma.$disconnect());
