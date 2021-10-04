import React, { Suspense, lazy, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
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

    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    const { items } = useContext(WordpressInfoContext)
    const { acf } = items

    return ( 
        <div id='connect' ref={ref} className={`connect fade-in-section ${ inView ? 'is-visible' : '' }`}>
            <Suspense fallback={<div className='loading'>Loading...</div>}>
                <Overlay title='connect' />
            </Suspense>

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
        </div>
     )
}
 
export default Connect;
