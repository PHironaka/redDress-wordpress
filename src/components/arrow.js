import React from 'react'
import styled from "styled-components"

const Redress = styled.svg `
   padding: 0 1em;
   max-width: 58px;
   .cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px}
`

const SvgComponent = props => (
        <Redress viewBox="0 0 26.37 19.41" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M15.96.71l9 9-9 9M24.96 9.71H0"></path></g></g>
        </Redress>
)

export default SvgComponent