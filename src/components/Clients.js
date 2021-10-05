import React, { Suspense, lazy, useContext } from "react"
import { useInView } from 'react-intersection-observer'
import { WordpressClientContext } from "../contexts/WordpressClientContext"
import SkeletonClients from '../skeletons/SkeletonClients'

const Overlay = lazy(() => import('./Overlay'))

const Clients = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    const { posts } = useContext(WordpressClientContext)
    const displayedPosts = posts.filter(post => post.acf.display)

    return ( 
        <div id="clients" ref={ref} className={`clients fade-in-section ${ inView ? 'is-visible' : '' }`}>
            
            {inView && (
                <>
                    <Suspense fallback={<div className='loading'>Loading...</div>}>
                        <Overlay title='clients' />
                    </Suspense>

                    <div className="clients-container">
                        <div className="client-heading">
                            <h1>we've worked with</h1>
                        </div>

                        <div className='client-list'>
                            {displayedPosts && (displayedPosts.map((post) => {
                                return (
                                    <div 
                                        key={post.id} 
                                        className='client-item'>
                                            <img
                                                src={post.acf.logo.sizes.thumbnail} 
                                                srcSet={
                                                        `${post.acf.logo.sizes.medium} 150w, 
                                                        ${post.acf.logo.sizes.large} 300w, 
                                                        ${post.acf.logo.sizes['1536x1536']} 494w`} 
                                                alt={post.acf.client_name} />
                                    </div>
                                )
                            }))}
                            {displayedPosts.length < 1 ? ([1,2,3,4,5,6,7,8,9,10,11,12].map((n) => {
                                return (
                                    <div className="client-item shell">
                                        <SkeletonClients key={n} />
                                    </div>
                                )
                            })) : ''}
                        </div>
                    </div>
                </>
            )}
        </div>
     )
}
 
export default Clients;