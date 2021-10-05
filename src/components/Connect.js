import React, { Suspense, lazy, useContext, useEffect, useState, useRef } from "react"
import ReactGA from "react-ga"
import { WordpressInfoContext } from '../contexts/WordpressInfoContext'
import SkeletonConnect from '../skeletons/SkeletonConnect'

const Overlay = lazy(() => import('./Overlay'))

const Connect = () => {

    const sendLinkClickEvent = (key) => {
        ReactGA.event({
            category: 'Link Click',
            action: key
        });
    }

    const [isVisible, setVisible] = useState(false)
    const domRef = useRef()

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
            //         setVisible(entry.isIntersecting)
            //     }
            // })
        })
    
        const { current } = domRef;
        observer.observe(current);
    
        return () => observer.unobserve(current);
    }, [])

    return ( 
        <div id='connect' ref={domRef} className={`connect fade-in-section ${ isVisible ? 'is-visible' : '' }`}>
            <>
                <div className='connect-container'>
                    <div className="connect-heading">
                        <h1>connect</h1>
                    </div>
                    
                    <div className='connect-list'>
                        <div className='socials'>
                            <h3>socials</h3>

                            {acf && (
                                <ul>
                                    <li><a href={acf.twitter} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('twitter')} title={'twitter'}>twitter</a></li>
                                    <li><a href={acf.facebook} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('facebook')} title={'facebook'}>facebook</a></li>
                                    <li><a href={acf.linkedin} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('linkedin')} title={'linkedin'}>linkedin</a></li>
                                </ul>
                            )}
                            {!acf && [1,2,3].map((n) => <SkeletonConnect key={n} />)}
                        </div>

                        <div className='hello'>
                            <h3>say hello</h3>
                            
                            {acf && (
                                <ul>
                                    <li><a href={acf.email} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('email')} title={'email'}>hello@pixldinc.com</a></li>
                                    <li><a href={acf.skype} target='_blank' rel='noreferrer' onClick={() => sendLinkClickEvent('skype')} title={'skype'}>skype call</a></li>
                                </ul>
                            )}
                            {!acf && [1,2].map((n) => <SkeletonConnect key={n} />)}
                        </div>
                    </div>
                </div>

                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Overlay title='connect' />
                </Suspense>
            </>
        </div>
     )
}
 
export default Connect;
