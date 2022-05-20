import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import Notistack from "./app/shared/Notistack";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Notistack>
      <App />
    </Notistack>
  </React.Fragment>
)
