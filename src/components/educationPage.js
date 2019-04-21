import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: -51px 0 0;
  grid-gap: 3em;
  padding: 0;

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

  h3 {
      font-size:3em;
      margin-bottom: 16px;
      line-height: 1.2;
    }

  li {
    margin: 0 2em;
    display: block;
  }

  .education-workshop {
    display:grid;
    grid-template-columns: repeat(2, auto);
    grid-gap:4em;

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;
      grid-gap:2em;
    }

    div {
        padding: 0 2em;
        align-self:center;
        max-width: 500px;

        p {
            max-width:400px;
        }
        a {
            margin-top:10px;
            display:block;
            max-width:125px;
            border-bottom:1px solid;
            svg {
              max-width:24px;
              margin-bottom: -3px;
              margin-left:10px;
              path.cls-1 {
                stroke:#000;
              }
            }
        }
    }

    
  }

  .education-events {
   padding: 0 2em;
   margin: 3em 0;

   h4 {
      font-size:2em;
      line-height: 1.2;
    }

    p {
      color:#aeaeae;
    }

   &--testimonials {
    margin:3em 0;
    display:grid;
    grid-template-columns: repeat(4, auto);
    grid-gap:2em;
    padding: 0 2em;
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
    }
    h3,h4 {
        grid-column: 1/-1;
    }
    h4 {
      font-size:2em;
      margin-bottom: 16px;
      line-height: 1.2;
    }

    h5 {
      font-family: 'LabGrotesque-Bold';
      margin-top:2em;
    }
   }

    &--item {
        display:grid;
        grid-template-columns: 1fr 135px;
        grid-gap:4em;
        margin: 1em 0;
        padding:1em 0 0;
        border-top:1px solid;
        @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
          border-top:none;
        }

        p {
            max-width:400px;
        }

        a {
            margin-top:10px;
            background:#9b507e;
            color:white;
            padding:13px 15px;
            border-radius:4px;
            text-align:center;
            svg {
                max-width:24px;
                margin-left:10px;
                path.cls-1 {
                stroke:#fff;
              }
            }
        }
    }

    h3 {
      font-size:3em;
      margin-bottom: 16px;
      line-height: 1.2;
      grid-column:1/-1;
    }

    

  }


  /* .leader-profile {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:2em;
      padding: 0 2em;
      margin: 2em 0 0;
      &:nth-child(4) {
        border-bottom: 1px solid;
        padding-bottom:40px;
      }

    .leader-profile--info {
        align-self:center;
        h3 {
          font-size:2em;
          line-height:1;
          margin:0;
          
        }
      }
      
  } */

  /* .advisory {
    display:grid;
      grid-template-columns: repeat(3, auto);
      grid-gap:3em;
      padding: 0 2em;
      margin: 0 0 8em;
      h2 {
        grid-column:1/-1;
        margin-top:1em;
      font-size:3em;

      }
  } */


`;


const EducationPage = ({ children }) => <Container >{children}</Container>;

EducationPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EducationPage;
