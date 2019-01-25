import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout/layout'

export default ({ data }) => (
  <Layout>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Img fluid={data.file.childImageSharp.fluid} className="rounded-circle" />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "cat.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
