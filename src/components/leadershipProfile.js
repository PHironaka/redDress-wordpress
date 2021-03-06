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

  li {
    margin: 0 2em;
    display: block;
  }

  .leader-intro {
    display:grid;
    grid-template-columns:1fr;
    padding: 1em 0;
    border-bottom:1px solid;
    max-width:1120px;
    margin:2em ;
    p {
      max-width:40em;
      padding-left:0;
    }

    h2 {
      font-size:3em;
      margin:1em 0;
      line-height:1;
    }
  }

  .leader-profile {
      display:grid;
      grid-template-columns: repeat(2, auto);
      grid-gap:6em;
      padding: 0 2em;
      margin: 2em 0 0;

      @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
        }

      &:nth-child(4) {
        border-bottom: 1px solid;
        padding-bottom:40px;
        max-width: 1120px;
        margin: 2em;    
      }

    .leader-profile--info {
        align-self:center;
        h3 {
          font-size:2em;
          line-height:1;
          margin:10px 0;
          
        }
        h4 {
          margin-bottom:1em;
        }
        p {
          margin-bottom:1em;
        }
      }
      
  }

  .advisory {
    display:grid;
      grid-template-columns: repeat(3, auto);
      grid-gap:3em;
      padding: 0 2em;
      margin: 0 0 8em;

      p {
        margin:1em 0;
      }

      @media screen and (max-width: 850px) {
          grid-template-columns: 1fr;
          grid-gap:2em;
        }
        
      h2 {
        grid-column:1/-1;
        margin-top:1em;
      font-size:3em;

      }
  }


`;


const LeadershipProfile = ({ children }) => <Container>{children}</Container>;

LeadershipProfile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LeadershipProfile;
