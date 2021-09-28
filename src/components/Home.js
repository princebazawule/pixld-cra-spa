import React, { Suspense, lazy, useContext } from "react"
import { Helmet } from "react-helmet"
import { NavHashLink as Link } from 'react-router-hash-link'
import { useInView } from 'react-intersection-observer'
// import FadeIn from 'react-fade-in'
import { ThemeContext } from '../contexts/ThemeContext'
import { WordpressInfoContext } from "../contexts/WordpressInfoContext"
import SkeletonHome from '../skeletons/SkeletonHome'


// import Navbar from "./Navbar"

const Overlay = lazy(() => import('./Overlay'))

const Header = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
        // triggerOnce: true,
    });

    const theme = useContext(ThemeContext)
    const isDarkTheme = theme.state.isDarkTheme
    
    const { items } = useContext(WordpressInfoContext)
    const { acf } = items

    return ( 
        <>
            <Helmet>
                <body className={`${isDarkTheme ? "theme-dark" : "theme-light"}`} />
            </Helmet>
            
            {/* <FadeIn> */}
                <div id='home' ref={ref} className={`home fade-in-section ${ inView ? 'is-visible' : '' }`}>

                {inView && (
                    <>
                        <Suspense fallback={<div className='loading'>Loading...</div>}>
                            <Overlay title='about' />
                        </Suspense>

                        {/* <Navbar /> */}
                        
                        <div className='home-container'>
                            <h1>who r we?</h1>
                            <div className="profile">
                                {acf && ( 
                                    <>
                                        <div dangerouslySetInnerHTML={ { __html: acf.mini_profile}} ></div>
                                        <div className="get-in-touch">
                                            <Link to='/#connect' title='get in touch'>get in touch</Link>
                                        </div>
                                    </>
                                 )}
                                {!acf && [1].map((n) => <SkeletonHome key={n} />)}
                            </div>
                        </div>
                    </>
                )}
                    
                </div>
            {/* </FadeIn> */}
        </>
     )
}
 
export default Header;
