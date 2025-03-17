import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function generateResumeGemini(feedbacks: string[]) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `
      "Forneça um resumo dissertativo para um usuário que não conhece programação sobre as opiniões expressas em relação aos feedbacks que irei listar relacionado a um curso que está a venda. O resumo deve apresentar os principais argumentos em relação ao curso e pontos de vista de forma
      clara e objetiva, sem formatação em negrito ou ênfases. Evite incluir opiniões pessoais e concentre-se em apresentar uma visão equilibrada do assunto. Não faça um resumo para cada feedback, mas sim, um resumo ao todo.

      Feedbacks:
      ${feedbacks.join('\n\n')}
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;

    return response.text();
  } catch (error) {
    console.error('Erro ao gerar resumo:', error);
    return 'Não foi possível gerar o resumo.';
  }
}
