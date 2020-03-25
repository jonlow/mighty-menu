import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { MainColumn } from "../components/MainColumn"

const PaginationPage = () => {
  return (
    <Layout>
      <SEO title="Pagination" />
      <MainColumn></MainColumn>
    </Layout>
  )
}

export default PaginationPage
