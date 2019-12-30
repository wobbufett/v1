import React from "react"
import { Link, graphql } from "gatsby"
import { Layout, Intro } from '@components'
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Intro data={data.intro} />
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    {
      intro: markdownRemark(frontmatter: { template: { eq: "intro" } }) {
          html
          frontmatter {
            name
            intro
            sub
          }
      }
    }
`