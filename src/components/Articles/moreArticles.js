import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { Container, Title, Article, Categories, ArticleTitle } from "./styles"

let articlesData = [
  {
    title: "This is a Sunny day folks",
    categories: ["Technology", "Artificial", "Intelligence", "Business"],
    link: "https://avenue.design/",
  },
  {
    title: "No no. Lorraine, Lorraine",
    categories: ["Doctor Brown", "Marty", "Intelligence"],
    link: "https://www.google.com/",
  },
  {
    title: "Nam aliquam sem et tortor",
    categories: ["pharetra", "diam", "sit"],
    link: "https://theinspirationgrid.com/",
  },
]

export default function MoreArticles() {
  const [articles, setArticles] = useState()
  useEffect(() => {
    const ListArticles = () => {
      const newArticles = articlesData.map((article, index) => {
        return (
          <Article key={index}>
            <Categories key={index}>
              {article.categories.slice(0, 3).map((category, index) => {
                return (
                  <Link to="/" key={index}>
                    {category}
                  </Link>
                )
              })}
            </Categories>
            <ArticleTitle>
              <a href={article.link} key={index}>
                {article.title}
              </a>
            </ArticleTitle>
          </Article>
        )
      })
      setArticles(newArticles)
    }
    ListArticles()
  }, [])

  return (
    <Container>
      <Title>
        More <span>articles</span>
      </Title>
      {articles}
    </Container>
  )
}
