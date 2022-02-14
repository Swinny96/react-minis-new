import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/Projects/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Projects" />
    <Projects />
  </Layout>
)

export default IndexPage
