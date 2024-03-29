import React from "react"
import {Helmet} from "react-helmet"
import ReactGA from 'react-ga'
import Clients from "./components/Clients"
import Connect from "./components/Connect"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Work from "./components/Work"
import ThemeContextProvider from "./contexts/ThemeContext"
import WordpressClientContextProvider from "./contexts/WordpressClientContext"
import WordpressInfoContextProvider from "./contexts/WordpressInfoContext"
import WordpressWorkContextProvider from "./contexts/WordpressWorkContext"
import RouteChangeTracker from "./components/RouteChangeTracker"

const TRACKING_ID = "UA-6814118-1"
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>PixlD - We build beautiful websites</title>
        <link rel="canonical" href="https://pixldinc.com" />
        <meta name="title" content="PixlD - We build beautiful websites" />
        <meta name="description" content="We are a boutique, web design & development firm based in sunny Barbados" />

        {/* Open Graph / Facebook */}
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://pixldinc.com/" />
        <meta name="og:title" content="PixlD - We build beautiful websites" />
        <meta name="og:description" content="We are a boutique, web design & development firm based in sunny Barbados" />
        <meta name="og:image" content="https://pixldinc.link/cms/pixldcms/assets/screenshot.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pixldinc.com/" />
        <meta name="twitter:title" content="PixlD - We build beautiful websites" />
        <meta name="twitter:description" content="We are a boutique, web design & development firm based in sunny Barbados" />
        <meta name="twitter:image" content="https://pixldinc.link/cms/pixldcms/assets/screenshot.png" />
      </Helmet>

      <ThemeContextProvider>
        <WordpressInfoContextProvider>
          <Navbar />
          <Home />
        </WordpressInfoContextProvider>

        <WordpressClientContextProvider>
          <Clients />
        </WordpressClientContextProvider>

        <WordpressWorkContextProvider>
          <Work />
        </WordpressWorkContextProvider>
        
        <WordpressInfoContextProvider>
          <Connect />
        </WordpressInfoContextProvider>
        
        <Footer />
      </ThemeContextProvider>

      <RouteChangeTracker />
    </div>
  );
}

export default App;
