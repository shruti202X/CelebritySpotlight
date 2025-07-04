import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "I want a minimum of one and a maximum of five celebrity names separated by comma's which are associate with the statement \"" +
      req.body.prompt +
      '". Just give me the output in a single comma separated line',
  });
  res.status(200).json({ text: response.text });
}
