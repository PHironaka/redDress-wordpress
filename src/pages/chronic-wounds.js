import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import Img from 'gatsby-image';

const Chronic = styled.div`
    margin: -51px 0px 0px;
    gap: 3em 3em;
    padding: 0 2em;

    .chronic-intro {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;

      @media screen and (max-width: 800px) {
        display:block;
    
      }

    }

    .chronic-outro {
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:2em;
      margin-top:3em;
      
      a {
        margin: 10px 0;
        display:block;
      }
      @media screen and (max-width: 800px) {
        display:block;
    
      }

    }



    .chronic-item {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      border-top:1px solid;
      border-bottom:1px solid;
      padding:17px 0 8px;
       

    }

    h2 {
      font-size:3em;
      margin:1em 0 10px;
    }

    ul {
      margin-top:2em;
    }
`
const ChronicSection = styled.div`
  background: #f2f2f2;
width: 100vw;
margin-left: calc(50% - 8px - 50vw);
position: relative;
padding: 4em 2em;
`
const ChronicTypes = styled.h3 `
    font-size:1.8em;
    margin-bottom:2em;
`

class ChronicWounds extends Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.chronic-facts'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
       $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }

    render() {
      const data = this.props.data
  
      return (
        <Layout>
        <SEO title="Chronic Wounds" keywords={[`gatsby`, `application`, `react`]} />
          <Chronic>
{data.allWordpressPage.edges.map(({ node }) => (
  <div key={node.id}>
  <div className="full-width-image-container margin-top-0" style={{
     backgroundImage: `url(
      https://phiro.000webhostapp.com/wp-content/uploads/2019/04/photo-1516670428252-df97bba108d1.jpeg)`,
     minHeight:'400px',
     backgroundRepeat:'no-repeat',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     marginLeft:'calc(-50vw + 50% - 8px)',
     position:'relative', 
     width: '100vw',
     
   }}>
 
</div>
  <FadeIn transitionDuration={500}>
        <h2>{node.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
        <ChronicSection>

        <ChronicTypes>The 3 Main Types of Chronic Wounds </ChronicTypes>
        <div class="chronic-item">
        <div>
        <h4>Diabetic Ulcers</h4>
        </div>
        <div className="chronic-facts" data-target="chronicNav">
          <span></span>
          <span></span>
        </div>
        <div id="chronicNav" className="chronicNav">
            <p> 
              A major cause of chronic wounds is diabetes, which is increasing in prevalence. Diabetes causes neuropathy, which inhibits nociception and the perception of pain. Thus, patients may not initially notice small wounds to legs and feet, and may therefore fail to prevent infection or repeated injury. Further, diabetes causes immune compromise and damage to small blood vessels, preventing adequate oxygenation of tissue, which can cause chronic wounds. Pressure also plays a role in the formation of diabetic ulcers.
            </p>
          </div>
        </div>

        
        </ChronicSection>
       
        <div class="chronic-outro">
           
          <div dangerouslySetInnerHTML={{ __html: node.acf.pagebottomsection }} />
          <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.id}/>

        </div>

       
          
    </FadeIn>
  </div>
))}

          </Chronic>
            
          
        </Layout>

      )
    }
  }
  
  export default ChronicWounds


export const pageQuery = graphql`
query {
    allWordpressPage (filter: { title: { eq:"Chronic Wounds"}})   {
        edges {
        node {
          id
          featured_media {
            localFile {
              childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
            }
          }
          acf {
            pagebottomsection
       
          }
          title
          excerpt
          content
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
}
`