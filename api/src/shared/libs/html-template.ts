export function paymentSuccessMailHTML(userName: string) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <p>Olá <strong>${userName}</strong>,</p>
      <h2 style="color: #4f46e5;">Seu pagamento foi confirmado com sucesso! 🚀</h2>
      <a href="https://localhost:3001" style="display: inline-block; background: #4f46e5; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">CursosIA</a>
      <p style="margin-top: 20px; font-size: 12px; color: #777;">Se você não se matriculou, ignore este e-mail.</p>
    </div>
  `;
}

export function enrolledSuccessMailHTML(
  userName: string,
  courses: { name: string }[],
) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #4f46e5;">Bem-vindo(a) aos seus novos cursos! 🎓</h2>
      <p>Olá <strong>${userName}</strong>,</p>
      <p>Você foi matriculado nos seguintes cursos:</p>
      <ul style="background: #f4f4f4; border-radius: 5px;">
        ${courses.map((course) => `<li style="padding: 10px;">${course.name}</li>`).join('')}
      </ul>
      <p>Acesse seus cursos e comece a aprender agora:</p>
      <a href="http://localhost:3001/my-courses" style="display: inline-block; background: #4f46e5; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Acessar Meus Cursos</a>
      <p style="margin-top: 20px; font-size: 12px; color: #777;">Se você não se matriculou, ignore este e-mail.</p>
    </div>
  `;
}
