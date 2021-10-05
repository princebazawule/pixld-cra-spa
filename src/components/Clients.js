import React, { Suspense, lazy, useContext, useEffect, useState, useRef } from "react"
import { WordpressClientContext } from "../contexts/WordpressClientContext"
import SkeletonClients from '../skeletons/SkeletonClients'

const Overlay = lazy(() => import('./Overlay'))

const Clients = () => {

    const { posts } = useContext(WordpressClientContext)
    const displayedPosts = posts.filter(post => post.acf.display)

    const [isVisible, setVisible] = useState(false)
    const domRef = useRef()

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
        })
    
        const { current } = domRef;
        observer.observe(current);
    
        return () => observer.unobserve(current);
    }, [])

    return ( 
        <div id="clients" ref={domRef} className={`clients fade-in-section ${ isVisible ? 'is-visible' : '' }`}>
            <>

                {/* <> */}
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
                                    <div 
                                        key={n}
                                        className="client-item shell">
                                        <SkeletonClients />
                                    </div>
                                )
                            })) : ''}
                        </div>
                    </div>
                {/* </> */}

                {/* <> */}
                    <Suspense fallback={<div className='loading'>Loading...</div>}>
                        <Overlay title='clients' />
                    </Suspense>
                {/* </> */}
            </>
        </div>
     )
}
 
export default Clients;