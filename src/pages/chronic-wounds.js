import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import Img from 'gatsby-image';

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
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;

      ul {
        margin:1em 0 2em;
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

    p {
      margin-bottom:2em;
    }

    ul {
      margin:0 0 2em;

      li {
        margin-left:3em;
        
      }
    }
`
const ChronicSection = styled.div`
  background: #f2f2f2;
width: 100vw;
margin-left: calc(50% - 8px - 50vw);
position: relative;

h4 {
  margin-bottom:2em;
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


`
const ChronicContainer = styled.div`
   padding: 3em 36px;
      max-width: 1200px;
      margin: 0 auto;

`
const ChronicTypes = styled.h3 `
    font-size:1.8em;
    margin-bottom:2em;
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
        <h2>{node.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.content }} />
        <ChronicSection>
        <ChronicContainer>
        <ChronicTypes>The 3 Main Types of Chronic Wounds </ChronicTypes>
        <div class="acti-item">
        <div>
        <h3>Diabetic Ulcers</h3>
        </div>
        <div className="actigraft-1" data-target="actiNav1">
        <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav1" className="actiNav1">
           
           <p>
           A major cause of chronic wounds is diabetes, which is increasing in prevalence. Diabetes causes neuropathy, which inhibits nociception and the perception of pain. Thus, patients may not initially notice small wounds to legs and feet, and may therefore fail to prevent infection or repeated injury. Further, diabetes causes immune compromise and damage to small blood vessels, preventing adequate oxygenation of tissue, which can cause chronic wounds. Pressure also plays a role in the formation of diabetic ulcers.

           </p>
          
           <ul>
            <h4> 
            Efficient Wound Treatment
            </h4>
              <li>
              $5,391, on average, to treat (most expensive type of chronic wound to treat)
              </li>
              <li>
              2 times the cost of other types of chronic ulcers
           </li>
              <li>
              $18,977 cost for diabetes mellitus (DM) with chronic ulcer versus $9,958 for DM alone
              </li>
              <li>
              21.3% hospital readmission rate for DM with chronic ulcer versus 8.5% for DM w/o complication
              </li>

              
            </ul>



          </div>
        </div>

        <div class="acti-item">
        <div>
        <h3>Venous and Arterial Ulcers</h3>
        </div>
        <div className="actigraft-2" data-target="actiNav2">
        <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav2" className="actiNav2">
           <p>
           Venous ulcers usually occur in the legs and mostly affect the elderly. They are thought to be due to venous hypertension caused by improper function of valves that exist in the veins to prevent blood from flowing backward. This dysfunction causes ischemia that, combined with reperfusion injury, leads to tissue damage and wounds.
           </p>
            

          </div>
        </div>


        <div class="acti-item last">
        <div>
        <h3>Pressure Ulcers</h3>
        </div>
        <div className="actigraft-3" data-target="actiNav3">
          <span className="plus-1"></span>
          <span className="plus-2"></span>
        </div>
        <div id="actiNav3" className="actiNav3">
        <p>
        Pressure ulcers usually occur in people with conditions, such as paralysis, that inhibit movement of body parts commonly subjected to pressure—including heels, shoulder blades, and the sacrum. Pressure ulcers are caused by ischemia that occurs when pressure on the tissue is greater than the pressure in capillaries, restricting blood flow into the area. Muscle tissue, which needs more oxygen and nutrients than skin does, shows the worst effects from prolonged pressure. As in other chronic ulcers, reperfusion injury damages tissue.
           </p>
            
          </div>
        </div>
        </ChronicContainer>
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