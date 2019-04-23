import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import FadeIn from 'react-fade-in'

const Container = styled.div`
  margin: -3.9rem 0 0;
  grid-gap: 3em;
  padding: 0;

  h1{
      position:relative;
      top:100px;
      font-size:4em;
      padding: 0 36px;
      max-width: 1200px;
      margin: 0 auto;

      @media screen and (max-width: 750px) {
        font-size:2.5em;
        margin: 0;

    }

  }

  `
  
const ShopifyContent = styled.div `
   margin: 3em 0;
   
   svg {
       max-width:24px;
       margin-left:10px;
     }

   .index-section {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-gap: 1em;
    margin:4em 0;
    padding: 0 2em;
    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        margin:1em 0;
        padding: 0 1em;
        
    }

    h2 {
      font-size:2.3em;
      margin-bottom:1em;
    }
    div {
      margin: 2em;
      @media screen and (max-width: 850px) {
        margin:1em 0;
        
    }
    }
   }

   .index-testimonials {
    display: grid;
    grid-template-columns: repeat(4,auto);
    grid-gap: 2em;
    padding: 3em 0;
    margin: 2em;
    border-top:1px solid;
    border-bottom:1px solid;
    @media screen and (max-width: 850px) {
          grid-template-columns: repeat(2,auto);
    }
    h4 {
      margin-top:2em;
    }
   }

   .index-pages {
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-gap: 2em;
    padding: 0 2em;
    margin: 2em 0;
    @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
    }

    h4 {
      margin-top:2em;
    }

    p {
      padding-right:4em;
      margin:1em 0 2em;
    }
   }


`


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allWordpressPage.edges.map(({ node }) => (
        <Container>
         {/* <Img fluid={node.image.localFile.childImageSharp.fluid} alt={node.id}/> */}
         <div className="full-width-image-container margin-top-0" style={{
            backgroundImage: `url(${
            !!node.featured_media.localFile.childImageSharp
            ? node.featured_media.localFile.childImageSharp.fluid.src
            : node.featured_media
            })`,
            minHeight:'400px',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginLeft:'calc(-50vw + 50% - 8px)',
            position:'relative', 
            width: '100vw',
            
          }}>
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
            color: 'white',
            }}
          >
            {node.title}
          </h1>
     </div>
          <FadeIn transitionDuration={500}>
            <ShopifyContent dangerouslySetInnerHTML={{ __html: node.content }} />
          </FadeIn>
        </Container>
        ))}

  </Layout>
)

export default IndexPage

export const query = graphql`
   query {
    allWordpressPage  (filter: { title: { eq:"Healing Environment"}}) {
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