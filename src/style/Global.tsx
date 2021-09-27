import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {  
    background-color: #f39f86;
    background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
  ;

    img {
      height: auto;
      max-width: 100%;
    }
    
  }
  
  
`

export default GlobalStyle
