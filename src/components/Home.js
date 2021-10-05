import React, { Suspense, lazy, useContext, useEffect, useState, useRef } from "react"
import { Helmet } from "react-helmet"
import { NavHashLink as Link } from 'react-router-hash-link'
import ReactGA from "react-ga"
import { ThemeContext } from '../contexts/ThemeContext'
import { WordpressInfoContext } from "../contexts/WordpressInfoContext"
import SkeletonHome from '../skeletons/SkeletonHome'

const Overlay = lazy(() => import('./Overlay'))

const Header = () => {

    const sendButtonClickEvent = () => {
        ReactGA.event({
            category: 'Button Click',
            action: 'Get in Touch'
        });
    }

    const [isVisible, setVisible] = useState(false)
    const domRef = useRef()
    
    const theme = useContext(ThemeContext)
    const isDarkTheme = theme.state.isDarkTheme
    
    const { items } = useContext(WordpressInfoContext)
    const { acf } = items

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // console.log(`entry`, entry, `is = ${entry.isIntersecting}`)
                setVisible(entry.isIntersecting)
            })
            // entries.forEach(entry => {
            //     if (entry.isIntersecting) {
            //         // console.log(`entry`, entry, `is = ${entry.isIntersecting}`)
            //         setVisible(entry.isIntersecting);
            //     }
            // })
        });
    
        const { current } = domRef;
        observer.observe(current);
    
        return () => observer.unobserve(current);
    }, [])

    return ( 
        <>
            <Helmet>
                <body className={`${isDarkTheme ? "theme-dark" : "theme-light"}`} />
            </Helmet>
            
            <div id='home' ref={domRef} className={`home fade-in-section ${ isVisible ? 'is-visible' : '' }`}>
                <>  
                    {/* <> */}
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
                                {!acf && [1, 2].map((n) => <SkeletonHome key={n} />)}
                            </div>
                        </div>
                    {/* </> */}

                    {/* <> */}
                        <Suspense fallback={<div className='loading'>Loading...</div>}>
                            <Overlay title='about' />
                        </Suspense>
                    {/* </> */}
                </>    
            </div>
        </>
     )
}
 
export default Header;
