import axios from "axios";

export default async function handler(req, res) {
  const { query } = req;
  const celebs = ["BLACKPINK", "Doja Cat", "Halsey"];
  let results = [];

  try {
    for (let celeb of celebs) {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: celeb,
          sortBy: "publishedAt",
          language: "en",
          apiKey: process.env.NEWSAPI_KEY,
        },
      });

      results.push({
        name: celeb,
        articles: response.data.articles.slice(0, 3),
      });
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
