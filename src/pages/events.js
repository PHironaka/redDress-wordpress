import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Arrow from '../components/arrow'
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


const EventsContainer = styled.div`
  margin-top:2em;
  padding:1em 0;
  p {
      max-width:450px;
    }
`

const EventPost = styled.div`
  display:grid;
  grid-template-columns:1fr 166px ;
  grid-gap: 2em;
  margin: 1em 0 ;
  border-top:1px solid;
  padding:1em 0 0;
  @media screen and (max-width: 800px) {
      display:block;
  }
  h2 {
    font-size:1.4em;
    margin:0 0 1em;
  }
`

const ReadArticle = styled.a`
  margin:10px 0 ;
  display:block;
  background:#8e436e;
  color:white;
  padding:14px;
  font-size:.9em;
`

class Events extends Component {
  render() {
    const data = this.props.data

    return (
  <Layout>
    <SEO title="Events" />
    <NewsPage>
    <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  https://phiro.000webhostapp.com/wp-content/uploads/2019/05/Education-Header-1.jpg)`,
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
               >Events</h1>
      </div>
      <EventsContainer>
      <div>
         <h2>Upcoming Events</h2>
         <p>Meet the RedDress team and learn more about ActiGraft at one of these upcoming events.</p>
            
      </div> 
        <FadeIn transitionDuration={500}>
          <EventPost>
            <div>
                <h3>SAWC Spring</h3>
                <p> May 7-11, 2019 | San Antonio, TX | Booth 954</p>
            </div>
            <ReadArticle href="#">Schedule A Meeting</ReadArticle>

          </EventPost>

          <EventPost>
            <div>
                <h3>ISDF</h3>
                <p>May 22-25, 2019 | The Hague, Netherlands | Booth G42</p>
            </div>
            <ReadArticle href="#">Schedule A Meeting</ReadArticle>

          </EventPost>


          <EventPost>
            <div>
                <h3>EWMA</h3>
                <p> June 5-7, 2019 | Goteborg, Sweden | Booth B03:03</p>
            </div>
            <ReadArticle href="#">Schedule A Meeting</ReadArticle>

          </EventPost>


          <EventPost>
            <div>
                <h3>APMA</h3>
                <p> July 11-14, 2019 | Salt Lake City, UT| Booth 722</p>
            </div>
            <ReadArticle href="#">Schedule A Meeting</ReadArticle>

          </EventPost>


          <EventPost>
            <div>
                <h3>Podiatric Residency Education Summit East</h3>
                <p> August 10-12, 2019 | Teaneck, NJ</p>
            </div>
            <ReadArticle href="#">Schedule A Meeting</ReadArticle>

          </EventPost>


        </FadeIn>
      </EventsContainer>
    </NewsPage>
  </Layout>
    )
  }
}


export default Events
