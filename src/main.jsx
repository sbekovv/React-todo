import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <Global/>
        <App />
    </Provider>
  </React.StrictMode>,
)
