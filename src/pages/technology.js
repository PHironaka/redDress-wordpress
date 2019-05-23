import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import Img from 'gatsby-image';
import Dot from '../components/dots/01_Hemostasis.png'
import Tech1 from '../components/dots/02_Inflammation.png'
import Dotc from '../components/dots/03_Proliferation.png'
import Dotd from '../components/dots/04_Remodeling.png'
import Arrow from '../components/arrow'

const Chronic = styled.div`
    margin: -51px 0px 0px;
    gap: 3em 3em;
    padding: 0 2em;
    
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
        margin-bottom:3em;
      }
      
    }

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
      font-size:2em;
      margin:1em 0 10px;
    }

    p {
      margin-bottom:2em;
      max-width:800px;
      padding: 0 3em 0 0 ;
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

`
const ChronicContainer = styled.div`
   padding: 3em 0em 3em 3em;
      max-width: 1200px;
      margin: 0 auto 3em;

`
const ChronicTypes = styled.h3 `
    font-size:1.8em;
    margin-bottom:2em;
`

const IconSection = styled.div`
    display:grid;
    grid-template-columns:  1fr 2fr;
    grid-gap:2em;

    img {
        max-height:120px;
        justify-self:center;
    }

    @media screen and (max-width: 800px) {
        display:block;
      }

`

const ActiThree = styled.div`
    display:grid;
    grid-template-columns: repeat(3, auto);
    grid-gap:1em;
    padding:0 2em 0 0em;
   div {
       height:320px;
       background:white;
       padding:2em;
       align-items:center;

       @media screen and (max-width: 1000px) {
    height:220px;

      }

      @media screen and (max-width: 600px) {
    height:420px;
    padding:1em;

      }


   }
   @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, auto);

      }

`
const ActiTreatment = styled.div`
    margin:2em 0;

    h3 {
        margin-bottom:1em;
    }
    a {
        display: block;
      text-decoration:underline;
    }
`

const PublishedArticles = styled.div`
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:2em; 
      border-top:1px solid;
      padding:2em 0;

      @media screen and (max-width: 700px) {
        display:block
      }
    div {
        align-self:center;
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
  padding: 0 3em;
	width: 100%;
	height: 100%;
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
        <SEO title="Chronic Wounds" keywords={[`gatsby`, `application`, `react`]} />
          <Chronic>
  <div >
  <div className="full-width-image-container margin-top-0" style={{
     backgroundImage: `url(
      https://phiro.000webhostapp.com/wp-content/uploads/2019/05/AboutUs-Header.jpg)`,
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
                 Technology
               </h1>
</div>
  <FadeIn transitionDuration={500}>
        <div>
            <h2>How ActiGraft Works</h2>
            <p>Human skin, when injured, is capable of repairing itself to restore tissue integrity and heal the wound. This wound healing involves 4 overlapping process, beginning immediately after an injury:</p>
        </div>  
        
        <IconSection>
            <img src={Dot} />
            <p><strong>Hemostasis</strong> The body works to stop the bleeding and start the healing process by activating a coagulation cascade. A fibrin blood clot forms that plugs severed blood vessels and fills in tissue discontinuity at the wound site. </p>
            
            <img src={Tech1} />
            <p><strong>Inflammation</strong> During this phase, white blood cells and macrophages enter the wound to destroy bacteria and remove debris. The blood clot creates a fibrin scaffold that serves as a protective, provisional extracellular matrix (ECM) containing cytokines and growth factors (interleukin, transforming growth factor-β, platelet-derived growth factor, and vascular endothelial growth factor, among others) that facilitate tissue repair. </p>

            <img src={Dotc} />
            <p><strong>Proliferation</strong> The blood clot recruits endothelial cells and fibroblasts to synthesize a permanent ECM. The focus is filling and covering the wound. </p>


            <img src={Dotd} />
            <p><strong>Remodeling</strong>
The blood clot dries out and becomes a protective scab. Under the scab, tissue remodeling takes place undisturbed. The fibrin is replaced by fibronectin and hyaluronan, and the scab falls off to reveal a collagenous scar.</p>
        </IconSection>
       
        <PublishedArticles>
            <div>
            <h2>The Challenge of Treating Chronic Wounds</h2>
            <p>Chronic wounds—including diabetic ulcers, venous and arterial ulcers, and pressure ulcers—often don’t heal or heal slowly because an underlying defect is impeding blood flow to the wound site. This lack of blood prevents the body from going through its natural wound healing process. </p>
            <Link to="/actigraft">Read Article <Arrow /> </Link>
            </div>
            <img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/05/iStock-623682924.jpg" />
            
            </PublishedArticles>    

            <PublishedArticles>
             <img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/05/Whole-Blood-Clot.jpg" />
             <div>
            <h2>Using ActiGraft to Treat Chronic Wounds</h2>
            <p>ActiGraft is the first wound care product that enables health care providers to produce—in real time—in vitro blood clots from a patient’s whole blood. This innovative solution brings the patient’s blood to the wound site to initiate and promote the healing process. Once applied, the blood clot serves as the protective covering, biologic fibrin scaffold, and wound microenvironment to promote the natural wound healing processes of the body.</p>
            <Link to="/actigraft">Read Article <Arrow /> </Link>
            </div>
            </PublishedArticles>    
            <Video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6ncHm2ptklo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>

          <Video>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/WCHY4HfvhsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>

          <Video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/pUa0OXkj9Y8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
          <Video>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fvveLKd4dXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
    </FadeIn>
  </div>


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
