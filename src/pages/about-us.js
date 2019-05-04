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

    h3 {
        font-size:1.7em;
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

const AboutSection = styled.div`
    margin:2em 0;

   h3 {
       margin-bottom:1em;
   }
   p {
       max-width:700px
   }

   a {
       text-decoration:underline;
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

const AboutContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:2em;
    padding:3em 0;
    @media screen and (max-width: 800px) {
    grid-template-columns: 1fr ;
    
      }
    .content {
        padding:3em;
        align-self:center;

        h3 {
            margin-bottom:1em;
        }
        a {
       text-decoration:underline;
   }
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
    >{node.title} Us </h1>
</div>
  <FadeIn transitionDuration={500}>
  <AboutSection>
    <h3>Revolutionizing Chronic Wound Treatment</h3>
       <p>
        RedDress is committed to improving the health and lives of patients around the world by revolutionizing the way we treat chronic wounds. Our innovative products are advanced, biologic wound care solutions that reproduce the natural wound healing processes of the body.
       </p>

       <p>
        Founded in 2009 by Dr. Igal Kushnir MD and Alon Kushnir with the goal of developing more effective, natural, and economically viable treatments for chronic wounds, we’re excited to announce our latest innovation—ActiGraft.
       </p>

       <Link to="/actigraft">See How ActiGraft Works <Arrow /> </Link>


  </AboutSection>
       
<ChronicSection>
    <AboutContent>
        <div className="content">
        <h3>Our Vision</h3>
    <p>Our unprecedented, proprietary, patented technology delivers the healing power of advanced biologic products at an economically viable price to heal wounds effectively.</p>
        </div>
        <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.id}/>
 
        <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.id}/>
        <div className="content">
        <h3>About the Team</h3>
    <p>Our experienced team of medical experts and business leaders is committed to delivering advanced, cost-effective chronic wound treatments that improve life for both patients and medical professionals.</p>
       <Link to="/leadership">Meet the Team <Arrow /> </Link>
        </div>

        <div className="content">
        <h3>Work With US</h3>
    <p>We’re always looking for creative, professional, success-driven individuals to join our growing team. Take a look at our current career opportunities and send us your resume!</p>
        
    <Link to="/careers">Find Career Opportunities <Arrow /> </Link>
       
        </div>
        <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt={node.id}/>

</ AboutContent>
  
</ChronicSection>
       
          
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
    allWordpressPage (filter: { title: { eq:"About"}})   {
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