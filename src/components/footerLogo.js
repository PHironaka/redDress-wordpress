import React from 'react'
import styled from "styled-components"
import IG from "../components/social/instagram"
import FB from "../components/social/facebook"
import TW from "../components/social/twitter"

const Redress = styled.svg `
   max-width: 135px;
   padding: 0 1em;
   position: absolute;
    top: -50px;
    margin:0 auto;
`

const Social = styled.div`
margin-top: 10px;
  a {
    color:black;
  }

  display:grid;
  grid-template-columns:20px 20px 20px;
  grid-gap:2em;
`

const CopyContact = styled.div`
    display:grid;
    grid-template-columns: repeat(2, auto);
    grid-gap:2em;
    padding: 0 1em;
    margin-top: -89px;
    font-size: .8em;

    @media screen and (max-width: 1000px) {
        margin-top: 50px;
        display:block;
     }  

    a {
        color:white;
    }

`

const SvgComponent = props => (
    <div>
        <Redress width="160" viewBox="0 0 160 127" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-3" fill="none" fill-rule="evenodd">
                <g id="RedDress_Website_Mockup_v4.0" transform="translate(-424 -264)">
                <g id="Group-193" transform="translate(424 264.21)">
                    <path id="Fill-183" fill="#9B507E" d="M.28 79.3h158.7V32.66H.28z"/>
                    <path d="M6.56 12.8h6.34c2.78 0 4.49-1.45 4.49-3.97 0-2.56-1.7-4-4.49-4H6.56v7.97zm11.16 14.05l-6.3-9.75H6.56v9.75H1.37V.53h12.46c5 0 8.67 3.4 8.67 8.3 0 3.86-2.19 6.78-5.7 7.86l6.7 10.16h-5.78z" id="Fill-185" fill="#9B507E"/>
                    <path d="M28.73 15.17h8.86c-.19-2.56-1.74-4.11-4.3-4.11-2.49 0-4 1.55-4.56 4.1m7.97 7.65c.74-.37 1.7-1.04 2.89-2.04l2.7 2.96c-2.66 2.7-5.22 3.71-8.45 3.71-6.11 0-9.93-3.93-9.93-9.97 0-5.9 3.63-10.2 9.53-10.2 5.67 0 8.86 3.53 8.86 9.46 0 .7-.04 1.33-.08 1.89h-13.6c.44 2.93 2.18 4.74 5.34 4.74 1.07 0 1.96-.18 2.74-.55" id="Fill-186" fill="#9B507E"/>
                    <path d="M58.38 17.4c0-3.6-1.96-5.83-4.74-5.83-2.78 0-4.64 2.26-4.64 5.82 0 3.56 1.78 5.86 4.6 5.86 2.82 0 4.78-2.3 4.78-5.86zM63.02.52v26.32h-4.49v-2.49c-1.37 2.04-3.37 3.04-6.04 3.04-4.86 0-8.38-4-8.38-10 0-6.09 3.6-10.02 8.42-10.02 2.48 0 4.37.82 5.67 2.49V.53h4.82z" id="Fill-187" fill="#9B507E"/>
                    <path d="M72.25 4.9v17.57h4.74c4.49 0 7.42-3 7.42-8.78 0-5.79-2.93-8.79-7.42-8.79h-4.74zM77.77.53c7.45 0 11.97 5.4 11.97 13.16 0 7.74-4.52 13.16-11.97 13.16H67.06V.53h10.71z" id="Fill-188" fill="#9B507E"/>
                    <path d="M104.6 8.24l-.84 4.19a9.57 9.57 0 0 0-2.41-.38c-2.56 0-4.16 2.04-4.16 5.46v9.34h-4.82V7.9h4.49v2.78c1-2 2.56-3 4.75-3 .92 0 1.63.15 3 .56" id="Fill-189" fill="#9B507E"/>
                    <path d="M109.32 15.17h8.86c-.19-2.56-1.75-4.11-4.3-4.11-2.49 0-4 1.55-4.56 4.1m7.97 7.65c.74-.37 1.7-1.04 2.89-2.04l2.7 2.96c-2.67 2.7-5.22 3.71-8.45 3.71-6.12 0-9.93-3.93-9.93-9.97 0-5.9 3.63-10.2 9.52-10.2 5.68 0 8.86 3.53 8.86 9.46 0 .7-.03 1.33-.07 1.89h-13.6c.44 2.93 2.18 4.74 5.33 4.74 1.08 0 1.97-.18 2.75-.55" id="Fill-190" fill="#9B507E"/>
                    <path d="M140.97 10.24l-2.6 3.15c-2.22-1.74-3.63-2.22-5.66-2.22-1.93 0-3.2.74-3.2 1.89 0 .78.6 1.18 1.64 1.48.52.15 1.45.37 2.78.67 5.34 1.18 7.34 2.52 7.34 6.04 0 3.7-3.08 6.19-8.12 6.19-3.6 0-6.15-.93-9.16-3.6l2.78-3.11a14.39 14.39 0 0 0 3.42 2.22c.92.41 1.92.6 3.07.6 1.93 0 3.3-.7 3.3-2 0-1-.85-1.52-1.89-1.82l-2.78-.63c-5.41-1.19-6.97-2.52-6.97-5.9 0-3.26 2.93-5.93 7.9-5.93 3.26 0 5.52.78 8.15 2.97" id="Fill-191" fill="#9B507E"/>
                    <path d="M159.1 10.24l-2.6 3.15c-2.22-1.74-3.63-2.22-5.67-2.22-1.92 0-3.19.74-3.19 1.89 0 .78.6 1.18 1.64 1.48.52.15 1.44.37 2.78.67 5.33 1.18 7.34 2.52 7.34 6.04 0 3.7-3.08 6.19-8.12 6.19-3.6 0-6.16-.93-9.16-3.6l2.78-3.11a14.39 14.39 0 0 0 3.41 2.22c.93.41 1.93.6 3.08.6 1.93 0 3.3-.7 3.3-2 0-1-.85-1.52-1.9-1.82l-2.77-.63c-5.41-1.19-6.97-2.52-6.97-5.9 0-3.26 2.93-5.93 7.9-5.93 3.26 0 5.52.78 8.15 2.97" id="Fill-192" fill="#9B507E"/>
                    <path id="Fill-260" fill="#FFF" d="M.28 126.4h158.7V79.75H.28z"/>
                </g>
                </g>
            </g>
        </Redress>
        <CopyContact>
        <div>
            <p>
            822 A1A North Ste 310 Ponte Verda Beach, FL 32082
            </p>
            <Social>
      <TW />
      <IG />
      <FB />
      </Social> 
        </div>
        <div>
            <p>800 674 9615</p>
            <a href="mailto:info@reddress.co.il">info@reddress.co.il</a>
        </div>
        </CopyContact>
        
    </div>
)

export default SvgComponent