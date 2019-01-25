import React from 'react'
import { graphql } from "gatsby"
import Layout from './layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{ marginTop: '1rem' }}>
          <article>
            <small className="text-muted">{post.frontmatter.date}</small>
            <h1 className="font-weight-bold">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
           </article>
           </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "D MMM YYYY")
      }
    }
  }
`
