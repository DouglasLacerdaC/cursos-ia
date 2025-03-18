import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function generateResumeGemini(feedbacks: string[]) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `
      "Gere um resumo natural e direto sobre as opiniões dos alunos em relação ao curso listado. O texto deve ser simples, fluído e sem formatações como títulos, negrito ou caracteres especiais.

      Foque nos pontos positivos e eventuais críticas de forma equilibrada, sem repetir feedbacks individuais. A linguagem deve ser acessível, sem termos técnicos e com um tom informativo e imparcial.

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
