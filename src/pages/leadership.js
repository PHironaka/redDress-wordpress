import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import LeadershipProfile from '../components/leadershipProfile'
import FadeIn from 'react-fade-in';
class Leadership extends Component {
    render() {
      const data = this.props.data
  
      return (
        <Layout>
        <SEO title="Leadership" keywords={[`gatsby`, `application`, `react`]} />
        <LeadershipProfile >
            {data.allWordpressPage.edges.map(({ node }) => (
              <div key={node.id}>
              {/* <Img fluid={node.image.localFile.childImageSharp.fluid} alt={node.id}/> */}
              <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  https://phiro.000webhostapp.com/wp-content/uploads/2019/05/Team-Header-1.jpg)`,
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
                <div dangerouslySetInnerHTML={{ __html: node.content }} />
                </FadeIn>
              </div>
            ))}
          
        </LeadershipProfile >
        </Layout>

      )
    }
  }

export default Leadership


export const pageQuery = graphql`
query {
    allWordpressPage (filter: { title: { eq:"Team"}})   {
        edges {
        node {
          id
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