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
const ActiGraftSection = styled.div`
    background: #f7f7f7;
    width: 100vw;
    margin-left: calc(50% - 8px - 50vw);
    position: relative;
    padding: 4em 2em;

    a {
        margin-top:2em;
        display:block;
    }
`

const ActiGraftSymbols = styled.div`
    display:grid;
    grid-template-columns: repeat(3, auto);
    grid-gap:5em;
    margin:2em 0 0;

    

    svg {
        max-width:55px;
    }
`

class ChronicWounds extends Component {

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