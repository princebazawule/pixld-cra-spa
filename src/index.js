import React from 'react'
// import ReactDOM from 'react-dom'
import { hydrate, render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  hydrate(
    <Router>
      <App />
    </Router>,
    rootElement
  )
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.register()
} else {
  render(
    <Router>
      <App />
    </Router>,
    rootElement
  )
}
