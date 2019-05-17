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


  h1{
      position:relative;
      top:100px;
      font-size:6em;
      padding: 0 36px;
      max-width: 1200px;
      margin: 0 auto;

      @media screen and (max-width: 750px) {
        font-size:2.5em;
        margin: 0;

    }
  }

    .chronic-intro {
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:2em;
      max-width:1120px;
      margin:0 auto;

      p {
        margin:10px 0;
      }

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

      h3 {
        font-size:1.5em;
      }

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
      margin-left:0em;
      margin-top:7px;

      li {
        margin-left:2em;
        margin-top:7px;
      }
    }
`
const ActiGraftSection = styled.div`
    background: #e6e5ea;
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

const NewsContainer = styled.div`
  margin-top:2em;
  padding:1em 0;
  grid-gap: 3em;

  h3 {
    font-size:1.6em;
  }

  p {
      max-width:750px;
      margin: 0 0 3em;
  }

 
  .pdf {
      display: block;
      text-decoration:underline;
      margin-top:3em;

  }
`

const Video = styled.div`
    text-align:center;
    position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
    margin-bottom:5em;

    iframe {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
  height: 100%;
  padding: 0 3em;
}
`


class ChronicWounds extends Component {
  componentDidMount() {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.actigraft-1'), 0);
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
                <h4>Faster Application</h4>
                <p>{node.acf.actigraft_fasterapplication}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_costeffectivetreatment_image }} />
                <h4>Cost Effective Treatment</h4>
                <p>{node.acf.actigraft_costeffectivetreatment}</p>
            </div>
            
            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_patientcomfort_image }} />
                <h4>Patient Comfort</h4>
                <p>{node.acf.actigraft_patientcomfort}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_easyintegration_image }} />
                <h4>Easy Integration</h4>
                <p>{node.acf.actigraft_easyintegration}</p>
            </div>

            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_simplifiedprocesses_image }} />
                <h4>Simplified Process</h4>
                <p>{node.acf.actigraft_simplifiedprocesses}</p>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: node.acf.actigraft_naturalhealing_image }} />
                <h4>Natural Healing</h4>
                <p>{node.acf.actigraft_naturalhealing}</p>
            </div>

        </ActiGraftSymbols>    
        <div>
        <ActiGraftSection>
            <div class="chronic-intro">
              <div>
                <h2>Take the Guessing Out of Wound Management</h2>
                <p>Standard of Care topical dressings address one or two aspects of a chronic wound bed.  The ActiGraft dressing contains the provisional extracellular matrix acting not only as a scaffold, but as a signaling, binding and activating substrate that regulates the crosstalk between fibroblasts, keratinocytes, endothelial cells and key inflammatory cells - the big players in wound healing.
</p>
                <p>ActiGraft changes the way we treat chronic wounds by managing every stage of the wound healing process and taking the guesswork out of wound treatment. 
</p>
               <a href="/actigraft">See How ActiGraft Works <Arrow /></a>
              </div>
            
            <Img fluid={node.acf.partnerimage.localFile.childImageSharp.fluid} alt={node.id}/>
           

            </div>
        </ActiGraftSection>
        </div>

        <NewsContainer>
        <h3>RD1 Kit Procedure</h3>
          <Video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ncHm2ptklo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>

        </NewsContainer>

        <div class="acti-item">
        <div>
        <h3>Benefits</h3>
        </div>
        <div className="actigraft-1" data-target="actiNav1">
        <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav1" className="actiNav1">
           
            <ul>
            <h4> 
            Efficient Wound Treatment
            </h4>
              <li>
              Provides the wound with an optimal, natural healing environment, allowing the healing process to proceed unhindered.
              </li>
              <li>
              Weekly vs. daily application saves facility staff nursing time.              </li>
              <li>
              Published results of 72% complete healing within 12 weeks.              </li>
              <li>
              Provides the wound with an optimal, natural healing environment, allowing the healing process to proceed unhindered.
              </li>
            </ul>

            <ul>
            <h4> 
            Simplified Procedures
            </h4>
              <li>
              Single-use, state-of-the-art, autologous graft wound care solution.
              </li>
              <li>
              Designed with nurses in mind, ActiGraft can be easily prepared at the patient's bedside in 12 minutes.              </li>
              <li>
              Ready to use right out of the box. Eliminates need for complex processing, temperature monitoring or storage.
           </li>
         
            </ul>

            <ul>
            <h4> 
            Reduced Costs
            </h4>
              <li>
              Because ActiGraft uses the patient’s own blood, we aren’t required to register as a tissue donor bank or go through the regulatory recording processes of skin substitutes. This reduces administration and documentation requirements.              </li>
              <li>
              No capital equipment requirements.
            </li>
              <li>
              Reduced costs compared to other chronic wound treatments.              </li>
            
            </ul>

            <ul>
            <h4> 
            Increased Patient Safety and Comfort
            </h4>
              <li>
              Created from the patient's blood, assuring safe and effective management of the wound.  </li>
              <li>
              Significantly faster healing with less wound interaction and patient pain.
            </li>
              <li>
              Patients have reported reduced pain and improved quality of life. Unlike some other dressings, ActiGraft doesn’t abrade or irritate the skin’s dermal layer.           </li>
            
            </ul>



          </div>
        </div>


        <div class="acti-item">
        <div>
        <h3>Actigraft Uses </h3>
        </div>
        <div className="actigraft-2" data-target="actiNav2">
          <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav2" className="actiNav2">
        <ul>
            <h4> 
            ActiGraft can be used for a wide variety of hard-to-treat chronic wounds, including but not limited to:
            </h4>
              <li>
              Diabetic/Neuropathic ulcers
              </li>
              <li>
              Pressure Ulcers/Injury   
              </li>           
              <li>
              Venous Stasis Ulcers           
              </li>
              <li>
              Post-surgical wounds           
              </li>
              <li>
              Traumatic wounds           
              </li>
              <li>
              Skin Tears
              </li>
            </ul>

            <ul>
            <h4> 
            Contra Indicated in wounds with:
            </h4>
              <li>
              Untreated osteomyelitis
              </li>
              <li>
              Active infections
              </li>           
              <li>
              Cancer of the wound bed
              </li>
             
            </ul>
            
          </div>
        </div>
          


        <div class="acti-item last">
        <div>
        <h3>Technical Specs</h3>
        </div>
        <div className="actigraft-3" data-target="actiNav3">
          <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav3" className="actiNav3">
            <ul>
              <li>
              Radius of ActiGraft clot – 3cm (Diameter 6cm)
              </li>
              <li>
              Sq centimeters – 28.3cm
              </li>
              <li>
              15ml of blood required
              </li>
              <li>
              Storage conditions - Store in the original container at a controlled room temperature of 15°C (59°F) – 25°C (77°F). Protect from freezing and avoid excessive heat.
              </li>
            </ul>
          </div>
        </div>
          
          
    </FadeIn>
  </div>
))}

<EducationActigraft>
<div>
<h3>Education for the medical professional</h3>
<p>Our Education Program is designed to help medical professionals learn more about emerging technologies and innovative wound care solutions. 
</p>
<Link to="/education">Learn More <Arrow /></Link></div>
<img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/05/lucas-vasques-453684-unsplash.jpg" alt="actigraft science" />
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
              fluid(maxWidth: 3000) {
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
            partnerimage {
                localFile {
                childImageSharp {
                fluid(maxWidth: 4000) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            }

            heroimage {
                localFile {
                childImageSharp {
                fluid(maxWidth: 4000) {
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