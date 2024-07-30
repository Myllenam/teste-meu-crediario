import React from 'react'
import ReactDOM from 'react-dom/client'
import { css, Global } from '@emotion/react'

import {App} from './App.tsx'
import "./assets/fontAwesome.ts";

const globalStyles=css`
*{
box-sizing:border-box;
margin:0;
padding:0;
outline:0;
scrollbar-color:#eaefe9 transparent;
}
#root {
  margin: 0 auto;
}

.no-scroll{
  overflow:hidden;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles}/>
    <App />
  </React.StrictMode>,
)
