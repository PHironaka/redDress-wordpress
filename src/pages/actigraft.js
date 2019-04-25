import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import Img from 'gatsby-image';
import Arrow from '../components/arrow'

const Chronic = styled.div`
    margin: -51px 0px 0px;
    gap: 3em 3em;
    padding: 0 2em;

    .chronic-intro {
      display:grid;
      grid-template-columns: 1fr 1fr;
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
    
    .acti-item {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      border-top:1px solid;
      padding:17px 0 8px;

      

      &.last {
        border-bottom:1px solid;
      }
      
    }

    
    

    .chronic-item {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      border-top:1px solid;
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
const ActiGraftSection = styled.div`
    background: #f7f7f7;
    width: 100vw;
    margin-left: calc(50% - 8px - 50vw);
    position: relative;
    padding: 4em 3em;
    margin-bottom:3em;
    a {
        margin-top:2em;
        display:block;
    }
`

const EducationActigraft = styled.div`
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:2em;
      margin:2em 0;

      h3 {
        font-size:1.5em;
        margin: 1em 0;
      }

      a {
        margin:2em 0;
        display:block;
      }

      @media screen and (max-width: 800px) {
        display:block;
    
      }

`

const ActiGraftSymbols = styled.div`
    display:grid;
    grid-template-columns: repeat(3, auto);
    grid-gap:5em;
    margin: 3em 0;

    @media screen and (max-width: 600px) {
        display:block;
    
      }

    

    svg {
        max-width:55px;
    }
`

class ChronicWounds extends Component {
  componentDidMount() {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.chronic-facts'), 0);
   if ($navbarBurgers.length > 0) {
 
       $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }

   const $dropdownMenu2 = Array.prototype.slice.call(document.querySelectorAll('.actigraft-2'), 0);
   if ($dropdownMenu2.length > 0) {
 
       $dropdownMenu2.forEach( el => {
       el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }

   const $dropdownMenu3 = Array.prototype.slice.call(document.querySelectorAll('.actigraft-3'), 0);
   if ($dropdownMenu3.length > 0) {
 
       $dropdownMenu3.forEach( el => {
       el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
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
        <SEO title="Actigraft" keywords={[`gatsby`, `application`, `react`]} />
          <Chronic>
            {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.id}>
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
 
        </div>

  <FadeIn transitionDuration={500}>
        <ActiGraftSection>
            <div class="chronic-intro">
            <Img fluid={node.acf.heroimage.localFile.childImageSharp.fluid} alt={node.id}/>
            <div>
                <h2>{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>

            </div>
        </ActiGraftSection>
        <ActiGraftSymbols>
            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_fasterapplication_image }} />
                <p>{node.acf.actigraft_fasterapplication}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_costeffectivetreatment_image }} />
                <p>{node.acf.actigraft_costeffectivetreatment}</p>
            </div>
            
            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_patientcomfort_image }} />
                <p>{node.acf.actigraft_patientcomfort}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_easyintegration_image }} />
                <p>{node.acf.actigraft_easyintegration}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_simplifiedprocesses_image }} />
                <p>{node.acf.actigraft_simplifiedprocesses}</p>
            </div>
            
            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_naturalhealing_image }} />
                <p>{node.acf.actigraft_naturalhealing}</p>
            </div>

        </ActiGraftSymbols>    
        <div>
        <ActiGraftSection>
            <div class="chronic-intro">
            <div>
                <h2>{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
            <Img fluid={node.acf.heroimage.localFile.childImageSharp.fluid} alt={node.id}/>
           

            </div>
        </ActiGraftSection>
        </div>

        <div class="chronic-item">
        <div>
        <h3>Benefits</h3>
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


        <div class="acti-item">
        <div>
        <h3>Antigraft Uses </h3>
        </div>
        <div className="actigraft-2" data-target="actiNav2">
          <span></span>
          <span></span>
        </div>
        <div id="actiNav2" className="actiNav2">
            <p> 
              A major cause of chronic wounds is diabetes, which is increasing in prevalence. Diabetes causes neuropathy, which inhibits nociception and the perception of pain. Thus, patients may not initially notice small wounds to legs and feet, and may therefore fail to prevent infection or repeated injury. Further, diabetes causes immune compromise and damage to small blood vessels, preventing adequate oxygenation of tissue, which can cause chronic wounds. Pressure also plays a role in the formation of diabetic ulcers.
            </p>
          </div>
        </div>
          


        <div class="acti-item last">
        <div>
        <h3>Technical Specs</h3>
        </div>
        <div className="actigraft-3" data-target="actiNav3">
          <span></span>
          <span></span>
        </div>
        <div id="actiNav3" className="actiNav3">
            <p> 
              A major cause of chronic wounds is diabetes, which is increasing in prevalence. Diabetes causes neuropathy, which inhibits nociception and the perception of pain. Thus, patients may not initially notice small wounds to legs and feet, and may therefore fail to prevent infection or repeated injury. Further, diabetes causes immune compromise and damage to small blood vessels, preventing adequate oxygenation of tissue, which can cause chronic wounds. Pressure also plays a role in the formation of diabetic ulcers.
            </p>
          </div>
        </div>
          
          
    </FadeIn>
  </div>
))}

<EducationActigraft>
<div>
<h3>Education for the medical professional</h3>
<p>Upcoming Events Accompanying messaging around product up to 3 lines max. It could also go here. Accompanying messaging</p>
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Learn More <Arrow /></a></div>
<img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/04/rawpixel-472352-unsplash.jpg" alt="" />
</EducationActigraft>   

          </Chronic>
          
          
        </Layout>

      )
    }
  }
  
  export default ChronicWounds


export const pageQuery = graphql`
query {
    allWordpressPage (filter: { title: { eq:"ActiGraft"}})   {
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
            actigraft_fasterapplication_image
            actigraft_fasterapplication 
            actigraft_easyintegration
            actigraft_easyintegration_image
            actigraft_naturalhealing_image
            actigraft_naturalhealing
            actigraft_patientcomfort_image
            actigraft_patientcomfort
            actigraft_simplifiedprocesses
            actigraft_simplifiedprocesses_image
            actigraft_costeffectivetreatment_image
            actigraft_costeffectivetreatment

            heroimage {
                localFile {
                childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            }
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