
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

const PageContainer = styled.div`
    padding: 0 2em;
    margin-top: -51px;
    p {
      margin: 1em 0;
      max-width:900px;
    }

    svg {
      max-width:24px;
      margin-left:5px;
      padding-top: 3px;
    }
`
class StaticPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PageContainer>
        <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  ./images/bg.jpg)`,
                 minHeight:'400px',
                 backgroundRepeat:'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 marginLeft:'calc(-50vw + 50% - 8px)',
                 position:'relative', 
                 width: '100vw',
                 
               }} />
        <h1>{post.frontmatter.title}</h1>
        <FadeIn transitionDuration={500}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </FadeIn>
         

        </PageContainer>
        
      </Layout>
    )
  }
}

export default StaticPageTemplate

export const pageQuery = graphql`
  query StaticPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`