import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  const query =
    'My celebrity is "' +
    req.body.celebName +
    '". Give me their top one Genre, their country of birth, their Instagram account and in case no account found give NA, their Instagram account followers and in case no Instagram account then give 0, their top work title and their second top work title. Just return a single line separated by commas. Like for Arijit Singh return "Music, India, https://www.instagram.com/arijitsingh/#, 11.9M, Tum Hi Ho, Channa Mereya"';
  console.log("Gemini2 API query: " + query);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: query }] }],
  });
  res.status(200).json({ text: response.text });
}
