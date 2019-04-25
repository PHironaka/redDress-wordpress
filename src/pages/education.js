import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import EducationPage from '../components/educationPage';
import { graphql } from 'gatsby';
import styled from "styled-components"
import FadeIn from 'react-fade-in'
import SEO from '../components/seo'

const ShopifyContent = styled.div `
   margin: 3em 0;
`

const Education = ({ data }) => (
  <Layout>
        <SEO title="Education" keywords={[`gatsby`, `application`, `react`]} />
      <EducationPage>
        {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.id} >
             {/* <Img fluid={node.image.localFile.childImageSharp.fluid} alt={node.id}/> */}
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
            <ShopifyContent dangerouslySetInnerHTML={{ __html: node.content }} />
            </FadeIn>
            </div>
        ))}
      </EducationPage>
  </Layout>
);

Education.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Education;

export const query = graphql`
  query {
    allWordpressPage (filter: { title: { eq:"Education"}})   {
        edges {
        node {
          id
          title
          excerpt
          content
          slug
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          }
        }
      }
    }
}
`