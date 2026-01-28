import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY || '';

export const streamGeminiResponse = async function* (
  userMessage: string,
  history: { role: string; content: string }[]
) {
  if (!apiKey) {
    yield "API Key is missing. Please check your configuration.";
    return;
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.0-flash-exp',
      config: {
        systemInstruction: `You are the Virtual Lumber Expert for Southern Pine Depot. 
        Your goal is to help customers understand Southern Yellow Pine products, grades (Clear vs Premium Knotty), 
        and patterns (Nickel Gap, V-Groove, etc.).
        
        Key Data Points:
        - We mill in Mississippi, stock in Nashville.
        - Face width for calculations is 5 1/8".
        - 1 Bundle = 128 pieces.
        - We do not sell via shopping cart; we verify every order personally.
        
        Be helpful, professional, and concise. Encouraging them to fill out the quote form is your primary conversion goal.`,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I'm having trouble connecting to the mill's server right now. Please try again or call us directly.";
  }
};