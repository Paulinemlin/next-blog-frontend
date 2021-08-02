import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="">
          

          <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{homepage.hero.title}</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {homepage.hero.description}
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">#Derniers articles</h2>
          <Articles articles={articles} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
