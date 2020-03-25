import React from "react"
import { CategoriesContainer } from "./style.js"

const Categories = ({ className, categories, catsTopRight }) => {
  return (
    <CategoriesContainer className={className} catsTopRight={catsTopRight}>
      {categories.map((cat, index) => {
        return <span key={index}>{cat}</span>
      })}
    </CategoriesContainer>
  )
}

export default Categories
