import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [news, setNews] = useState([]);
  const [fetchedcount, setFetchedcount] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data.results);
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
        <h1 className={styles.title}>Whats trending today?</h1>
        <h2>Fetched Count = {fetchedcount}</h2>
        {news.map((celeb) => (
          <div key={celeb.name}>
            <h2>{celeb.name}</h2>
            <ul>
              {celeb.articles.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
