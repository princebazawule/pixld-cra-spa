import React, { Suspense, lazy, useContext } from "react"
import { Helmet } from "react-helmet"
import { NavHashLink as Link } from 'react-router-hash-link'
import { useInView } from 'react-intersection-observer'
import ReactGA from "react-ga"
import { ThemeContext } from '../contexts/ThemeContext'
import { WordpressInfoContext } from "../contexts/WordpressInfoContext"
import SkeletonHome from '../skeletons/SkeletonHome'


// import Navbar from "./Navbar"

const Overlay = lazy(() => import('./Overlay'))

const Header = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    const sendButtonClickEvent = () => {
        ReactGA.event({
            category: 'Button Click',
            action: 'Get in Touch'
        });
    }

    const theme = useContext(ThemeContext)
    const isDarkTheme = theme.state.isDarkTheme
    
    const { items } = useContext(WordpressInfoContext)
    const { acf } = items

    return ( 
        <>
            <Helmet>
                <body className={`${isDarkTheme ? "theme-dark" : "theme-light"}`} />
            </Helmet>
            
            <div id='home' ref={ref} className={`home fade-in-section ${ inView ? 'is-visible' : '' }`}>  
                
                <div className='home-container'>
                    <h1>who's <span>PixlD</span>?</h1>
                    <div className="profile">
                        {acf && ( 
                            <>
                                <div dangerouslySetInnerHTML={ { __html: acf.mini_profile}} ></div>
                                <div className="get-in-touch">
                                    <Link to='/#connect' title='get in touch' onClick={sendButtonClickEvent}>get in touch</Link>
                                </div>
                            </>
                            )}
                        {!acf && [1].map((n) => <SkeletonHome key={n} />)}
                    </div>
                </div>

                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Overlay title='about' />
                </Suspense>
            </div>
        </>
     )
}
 
export default Header;
