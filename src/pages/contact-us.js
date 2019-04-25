import React, { Component } from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import FadeIn from 'react-fade-in'

const ContactForm = styled.div`
  border-top:1px solid;
  margin-top:2em;
  padding:1em 0;
`


class ContactUs extends Component {
  render() {
    const data = this.props.data

    return (
  <Layout>
    <SEO title="Page two" />
    <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  https://reddress-001.netlify.com/static/79e71e94ae199e296a9b3ef8b84b3290/5b12f/photo-1516670428252-df97bba108d1.jpg)`,
                 minHeight:'400px',
                 backgroundRepeat:'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 marginLeft:'calc(-50vw + 50% - 8px)',
                 position:'relative', 
                 width: '100vw',
                 
               }} />
      <h1>News</h1>
      <p>The latest news, updates, and insights from RedDress. </p>
      <ContactForm>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <FadeIn transitionDuration={500}>
            <div>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
        </FadeIn>
      ))}
      </ContactForm>
  </Layout>
    )
  }
}


export default ContactUs

export const ContactUsQuery = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: { title: {eq:"Contact Us"}}} ) {
        edges {
    
    node {
     html
     frontmatter {
       title
     }
      id
    }
  }
}
}

`