import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NewsPage = styled.div`
  padding: 0 2em;
  margin-top: -51px;

`
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <NewsPage>
    <div className="full-width-image-container margin-top-0" style={{
                 backgroundImage: `url(
                  ./images/bg.jpg)`,
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
    </NewsPage>
  </Layout>
)

export default SecondPage
