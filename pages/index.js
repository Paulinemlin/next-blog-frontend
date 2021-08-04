import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Header from "../components/header";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Header homepage={homepage}/>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          # Derniers articles
        </h2>
        <Articles articles={articles} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
