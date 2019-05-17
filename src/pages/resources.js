import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Arrow from '../components/arrow'
import PDF from '../components/pdf'
import FadeIn from 'react-fade-in';
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"

const NewsPage = styled.div`
  padding: 0 2em;
  margin-top: -51px;

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

  h2 {
      font-size:2em;
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

const Download  = styled.div`
    border 1px solid #000;
    align-self: center;
      padding: 4em 0;
      text-align: center;
  svg {
      max-width:50px;
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
   padding:3em 2em 3em 3em;
      max-width: 1200px;
      margin: 0 auto;

    h3{
        font-size: 1.7em;
        margin-bottom:1em;
    }
`

const Brochures = styled.div`
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap:1em;
      margin: 2em 0;

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;


    }

`

const PublishedArticles = styled.div`
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:2em; 
      border-top:1px solid;
      padding:2em 0;

      h4 {
          font-size:1.3em;
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

class News extends Component {
  render() {
    const data = this.props.data

    return (
  <Layout>
    <SEO title="News" />
    <NewsPage>
    <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  https://phiro.000webhostapp.com/wp-content/uploads/2019/05/Resources-Header.jpg)`,
                minHeight:'400px',
                 backgroundRepeat:'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 marginLeft:'calc(-50vw + 50% - 8px)',
                 position:'relative', 
                 width: '100vw',
                 
               }} >
       <h1
                 className="has-text-weight-bold is-size-1"
                 style={{
                 color: 'white',
                 }}
               >Resources</h1>
      </div>
      <FadeIn transitionDuration={500}>
        <NewsContainer>
                <div>
                    <p>Videos, brochures, research and testimonials to help you learn more about ActiGraft and the benefits of using this revolutionary new chronic wound treatment. </p>
                </div>
          
        </NewsContainer>
        <ChronicSection>
            <ChronicContainer>
            <h3>AntiGraft Information</h3>
                 <Brochures>
                 <Download>
                    <PDF />
                    <p>ActiGraft Brochure (pdf)</p>
                </Download>

                <Download>
                    <PDF />
                    <p>ActiGraft Q&A (pdf)</p>
                </Download>

                <Download>
                    <PDF />
                    <p>ActiGraft Procedure FAQ (pdf)</p>
                </Download>

                <Download>
                    <PDF />
                    <p>ActiGraft Reimbursements(pdf)</p>
                </Download>
                 </Brochures>
            </ChronicContainer>

        </ChronicSection>
        <NewsContainer>
        <h3>Testimonials</h3>
          <Video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6ncHm2ptklo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>

        </NewsContainer>

        <ChronicSection>
            <ChronicContainer>
            <h3>Published Articles</h3>
             <PublishedArticles>
            <div>
            <h4>Efficacy &Safety of a Novel Autologous Wound Matrix in the Management of Complicated, Chronic Wounds: A Pilot Study</h4>
            <Link to="/actigraft">Read Article <Arrow /> </Link>
            </div>
            <img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/04/rawpixel-1135756-unsplash-1024x692.jpg" />
            
            </PublishedArticles>    

            <PublishedArticles>
             <img src="https://phiro.000webhostapp.com/wp-content/uploads/2019/04/rawpixel-472352-unsplash.jpg" />
             <div>
            <h4>Safety and Efficacy of an Autologous Blood Clot Product (RD1) in the Management of Texas 1A or 2A Neuropathic Diabetic Foot Ulcers: A Prospective, Multicenter, Open Label Pilot Study </h4>
            <Link to="/actigraft">Read Article <Arrow /> </Link>
            </div>
            </PublishedArticles>    


            </ChronicContainer>

        </ChronicSection>
        <NewsContainer>
        <h2>Education for Medical Professionals</h2>
        <p>
        Our Educational Program is designed to help medical professionals learn more about emerging technologies and innovative wound care solutions. 
        </p>
        <Link to="/actigraft">Read Article <Arrow /> </Link>

        </NewsContainer>


    </FadeIn>
     
    </NewsPage>
  </Layout>
    )
  }
}


export default News

