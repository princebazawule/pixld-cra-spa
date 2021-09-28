import React, { Suspense, lazy, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { WordpressInfoContext } from '../contexts/WordpressInfoContext'
import SkeletonConnect from '../skeletons/SkeletonConnect'

const Overlay = lazy(() => import('./Overlay'))

const Connect = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
        // triggerOnce: true,
    });

    const { items } = useContext(WordpressInfoContext)
    const { acf } = items

    return ( 
        <div id='connect' ref={ref} className={`connect fade-in-section ${ inView ? 'is-visible' : '' }`}>

            {inView && (
                <>
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
                                        <li><a href={acf.twitter} target='_blank' rel='noreferrer'>twitter</a></li>
                                        <li><a href={acf.facebook} target='_blank' rel='noreferrer'>facebook</a></li>
                                        <li><a href={acf.linkedin} target='_blank' rel='noreferrer'>linkedin</a></li>
                                    </ul>
                                )}
                                {!acf && [1,2,3].map((n) => <SkeletonConnect key={n} />)}
                            </div>

                            <div className='hello'>
                                <h3>say hello</h3>
                                
                                {acf && (
                                    <ul>
                                        <li><a href={acf.email} target='_blank' rel='noreferrer'>hello@pixldinc.com</a></li>
                                        <li><a href={acf.skype} target='_blank' rel='noreferrer'>skype call</a></li>
                                    </ul>
                                )}
                                {!acf && [1,2].map((n) => <SkeletonConnect key={n} />)}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
     )
}
 
export default Connect;
