import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Arrow from '../components/arrow'
import PDF from '../components/pdf'
import FadeIn from 'react-fade-in';
import Img from 'gatsby-image'

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
      max-width: 420px;
  }
`

const NewsContainer = styled.div`
  margin-top:2em;
  padding:1em 0;
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3em;

  
    @media screen and (max-width: 850px) {
  grid-template-columns:  1fr;
    }
  .pdf {
      display: block;
      text-decoration:underline;
      margin-top:3em;

  }
`

const Download  = styled.div`
    border 2px solid #f7f7f7;
    align-self: center;
      padding: 4em 3em;
      text-align: center;
  svg {
      max-width:50px;
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
                    https://phiro.000webhostapp.com/wp-content/uploads/2019/05/static-head-contactb.jpg)`,
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
               >Reimbursement</h1>
      </div>
      <FadeIn transitionDuration={500}>
        <NewsContainer>
                <div>
                    <h2>ActiGraft Reimbursements Guide</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper </p>
                    <a href="#" className="pdf">Download PDF <Arrow /> </a>
            
                </div>
            <Download>
                <PDF />
             <p>ActiGraft Reimbursements(pdf)</p>
            </Download>
        </NewsContainer>
    </FadeIn>
     
    </NewsPage>
  </Layout>
    )
  }
}


export default News

