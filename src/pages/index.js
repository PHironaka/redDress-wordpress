import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import FadeIn from 'react-fade-in'
import { Link, graphql } from "gatsby"
import Arrow from '../components/arrow'
import ProductImageSlider from '../components/productImageSlider'
import Img from 'gatsby-image';

const Container = styled.div`
  margin: -53px 0 0;
  grid-gap: 3em;
  padding: 0;

  .slick-list,
  .slick-slider,
  .slick-track {
      position: relative;
      display: block;
      overflow: hidden;
  }
  
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
      visibility: hidden
  }
  
  .slick-slider {
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
      margin-left:'calc(-50vw + 50% - 8px)';
            position:relative;
            width:100vw;
  
  }
  
  .slick-list {
      overflow: hidden;
      margin: 0;
      padding: 0
  }
  
  .slick-list:focus {
      outline: 0
  }
  
  .slick-list.dragging {
      cursor: pointer;
      cursor: hand
  }
  
  .slick-slider .slick-list,
  .slick-slider .slick-track {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
  }
  
  .slick-track {
      top: 0;
      left: 0
  }
  
  .slick-track:after,
  .slick-track:before {
      display: table;
      content: ''
  }
  
  .slick-track:after {
      clear: both
  }
  
  .slick-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 1px
  }
  
  [dir=rtl] .slick-slide {
      float: right
  }
  
  .slick-slide img {
      display: block
  }
  
  .slick-slide.slick-loading img {
      display: none
  }
  
  .slick-slide.dragging img {
      pointer-events: none
  }
  
  .slick-initialized .slick-slide {
      display: block
  }
  
  .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent
  }
  
  .slick-arrow.slick-hidden {
      display: none
  }

  .slick-dots,
  .slick-next,
  .slick-prev {
      display:none !important;
  }
  
  
 
  

  
  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
      color: transparent;
      outline: 0;
      background: 0 0
  }
  
  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
      opacity: 1
  }
  
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
      opacity: .25
  }
  
  .slick-next:before,
  .slick-prev:before {
      font-size: 20px;
      line-height: 1;
      opacity: .75;
      color: #fff
  }
  
  .slick-prev {
      left: 25px
  }
  
  [dir=rtl] .slick-prev {
      right: 25px;
      left: auto
  }
  
  .slick-prev:before {
      content: '←'
  }
  
  .slick-next:before,
  [dir=rtl] .slick-prev:before {
      content: '→'
  }
  
  .slick-next {
      right: 25px
  }
  
  [dir=rtl] .slick-next {
      right: auto;
      left: 25px
  }
  
  [dir=rtl] .slick-next:before {
      content: '←'
  }
  
  .slick-dotted.slick-slider {
      margin-bottom: 30px
  }
  
  .slick-dots {
      width: 100%;
      margin: 0;
      list-style: none;
      text-align: center;
      z-index:1000;
  }
  
  .slick-dots li {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer
  }
  
  .slick-dots li button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 20px;
      height: 20px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: 0;
      background: 0 0
  }
  
  .slick-dots li button:focus,
  .slick-dots li button:hover {
      outline: 0
  }
  
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
      opacity: 1
  }
  
  .slick-dots li button:before {
      font-size: 26px;
      line-height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      content: '•';
      text-align: center;
      opacity: .25;
      color: #000
  }
  
  .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #000;
  }

  .slick-next,
  .slick-prev {
      font-size: 0;
      line-height: 0;
      top: 50%;
      width: 20px;
      height: 20px;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: 0;
      background: 0 0
      
  }

  h1{
      position:absolute;
      top:100px;
      font-size:4em;
      padding: 0 46px;
      max-width: 1200px;
      margin: 0 auto;

      @media screen and (max-width: 750px) {
        font-size:2.5em;
        margin: 0;

    }

  }

  .empower-container {
    margin: 0 auto;
    max-width: 1200px;
  }

  .empowerment-heal {
    max-width: 370px;
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
  max-width: 1200px;
margin: 6em auto;
  color:white;
  padding: 0 3em;
  position:absolute; 
  top:150px;

  p {
  max-width: 360px;
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

         <ProductImageSlider>
           <div>
           <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.title}
           style={{minHeight:'400px', marginLeft:'calc(-50vw + 50% - 8px)',
           position:'relative', 
           width: '100vw', }} />
           <h1
            className="has-text-weight-bold is-size-1"
            style={{
            color: 'white',
            }}
          >
            Introducing Actigraft
          </h1>
          <div className="hero">
          <p>The innovative wound care product that uses whole blood clots to heal chronic ulcers.</p>
          <Link to="/actigraft">Learn More <Arrow /></Link>
           </div>
           </div>

           <div>
           <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.title}
           style={{minHeight:'400px', marginLeft:'calc(-50vw + 50% - 8px)',
           position:'relative', 
           width: '100vw', }} />
           <h1
            className="has-text-weight-bold is-size-1"
            style={{
            color: 'white'
            }}
          >
            Introducing Actigraft
          </h1>
          <div className="hero">
          <p>The innovative wound care product that uses whole blood clots to heal chronic ulcers.</p>
          <Link to="/actigraft">Learn More <Arrow /></Link>
           </div>
           </div>

           {/* <div className="full-width-image-container margin-top-0" style={{
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
            Introducing Actigraft
          </h1>
          <div className="hero">
          <p>The innovative wound care product that uses whole blood clots to heal chronic ulcers.</p>
          <Link to="/actigraft">Learn More <Arrow /></Link>
          </div>
          
     </div>

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
            Introducing Actigraft
          </h1>
          <div className="hero">
          <p>The innovative wound care product that uses whole blood clots to heal chronic ulcers.</p>
          <Link to="/actigraft">Learn More <Arrow /></Link>
          </div>
          
     </div> */}

        </ProductImageSlider>
        
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
              fluid(maxWidth: 3000) {
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