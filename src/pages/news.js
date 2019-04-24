import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Arrow from '../components/arrow'
import FadeIn from 'react-fade-in';
import Img from 'gatsby-image'

const NewsPage = styled.div`
  padding: 0 2em;
  margin-top: -51px;
`
const NewsContainer = styled.div`
  border-top:1px solid;
  margin-top:2em;
  padding:1em 0;
`
const Post = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap: 2em;
  margin: 1em 0 2em;

  @media screen and (max-width: 800px) {
      display:block;
  }

  h2 {
    font-size:1.4em;
    margin:0 0 1em;
  }
`
const ReadArticle = styled.a`
  margin:2em 0;
  display:block;
`

class News extends Component {
  render() {
    const data = this.props.data

    return (
  <Layout>
    <SEO title="Page two" />
    <NewsPage>
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
      <h1>News</h1>
      <p>The latest news, updates, and insights from RedDress. </p>
      <NewsContainer>

      {data.allWordpressPost.edges.map(({ node }) => (
        <FadeIn transitionDuration={500}>
          <Post>
            <div>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.content }} />
              <ReadArticle href="https://google.com" target="_blank">Read More <Arrow /> </ReadArticle>
            </div>
            <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.id}/>

          </Post>
        </FadeIn>
      ))}
      </NewsContainer>
    </NewsPage>
  </Layout>
    )
  }
}


export default News

export const NewsQuery = graphql`
query {
  allWordpressPost   {
        edges {
        node {
          id
          title
          excerpt
          content
          slug
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
            }
          }
        }
      }
    }
}
`