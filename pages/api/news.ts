import axios from "axios";

export default async function handler(req, res) {
  const celebs = ["BLACKPINK", "Doja Cat", "Halsey"];
  const query = celebs.map((c) => `"${c}"`).join(" OR ");

  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        sortBy: "publishedAt",
        pagesixe: 20,
        language: "en",
        apiKey: process.env.NEWSAPI_KEY,
      },
    });
    res.status(200).json({ articles: response.data.articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
