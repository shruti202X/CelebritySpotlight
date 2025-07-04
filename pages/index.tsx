import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  const [news, setNews] = useState([]);
  const [fetchedcount, setFetchedcount] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data.articles);
      setFetchedcount((prev) => prev + 1);
    }
    fetchNews();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>CelebritySpotlight</title>
        <meta
          name="description"
          content="For creating a network of celebrities"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>Whats trending today?</h1>
        <h2>Fetched Count = {fetchedcount}</h2>
        <div className={styles.grid}>
          {news
            .filter((article) => article.urlToImage) // only articles with images
            .map((article, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.cardcontent}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.newsimg}
                      src={article.urlToImage}
                      alt={article.title}
                    />
                    <h3 className={styles.imgtitle}>{article.title}</h3>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
