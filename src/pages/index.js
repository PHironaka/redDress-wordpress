import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import FadeIn from 'react-fade-in'
import { Link, graphql } from "gatsby"
import Arrow from '../components/arrow'

const Container = styled.div`
  margin: -53px 0 0;
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

  .empowerment-heal {
    max-width: 360px;
    padding: 4em 36px;
    float:right;

    h2 {
      font-size:2.3em;
      line-height:1.4;
    }
    p {
      margin:5px 0;
    }
    a {
      display:block;
      margin-top:10px;
      text-decoration:underline;
    }
  }

.hero {
  max-width: 360px;
  margin: 6em 0;
  color:white;
  padding: 0 36px;

  p {
    font-size:1.1em;
  }

  a {
    color:white;
    margin-top:10px; 
    display:block;
  }

  svg path {
      stroke:white !important;
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
      margin: 2em 2em 2em 0;
      @media screen and (max-width: 850px) {
        margin:1em 0;
        
    }
    }
   }

   .index-testimonials {
    display: grid;
    grid-template-columns: repeat(3,auto);
    grid-gap: 2em;
    padding: 3em 0;
    margin: 2em;
    border-bottom:1px solid;
    @media screen and (max-width: 850px) {
          grid-template-columns: repeat(2,auto);
    }
    h4 {
      margin-top:2em;
      font-weight:400;
    }

    h2 {
      grid-column:1/-1;
      font-size:2em;
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
            Introducing Antigraft
          </h1>
          <div className="hero">
          <p>The innovative wound care product that uses whole blood clots to heal chronic ulcers.</p>
          <Link to="/actigraft">Learn More <Arrow /></Link>
          </div>
          
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