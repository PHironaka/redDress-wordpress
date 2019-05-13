import React from "react";
import Layout from '../../components/layout'
import styled from 'styled-components'

const EmailConfirm = styled.div`
  max-width:1200px;
  padding: 0 2em;
  margin: 0 auto;
`

export default () => (
  <Layout>
        <EmailConfirm>
          <div className="container">
            <div className="content">
                <h1>Thank you!</h1>
                <p>This is a custom thank you page for form submissions</p>
            </div>
          </div>
          </EmailConfirm>
  </Layout>
);