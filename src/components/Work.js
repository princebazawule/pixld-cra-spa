import React, { Fragment, Suspense, lazy, useState, useContext } from 'react'
import { useInView } from 'react-intersection-observer'
import { WordpressWorkContext } from '../contexts/WordpressWorkContext'
import SkeletonWork from '../skeletons/SkeletonWork'
import WorkGallery from './WorkGallery'

const Overlay = lazy(() => import('./Overlay'))

const Work = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const showWorkDetail = (index) => {
        activeIndex ? setActiveIndex(null) : setActiveIndex(index)
    }

    const closeGallery = (newValue) => {
        setActiveIndex(newValue);
    }

    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    const { posts } = useContext(WordpressWorkContext)
    const displayedPosts = posts.filter(post => post.acf.display)

    return ( 
        <div id="work" ref={ref} className={`work fade-in-section ${ inView ? 'is-visible' : '' }`}>
            {inView && (
                <>
                    <Suspense fallback={<div className='loading'>Loading...</div>}>
                        <Overlay title='work' />
                    </Suspense>
                    <div className="work-container">
                        <h1>selected work</h1>

                        <div className="projects">
                            <div className="project-wrap">

                                {displayedPosts && (displayedPosts.map((post, index) => {
                                        return (
                                            <Fragment key={post.id}>
                                                <div key={post.id} className="section" onClick={() => showWorkDetail(index)}>
                                                    <div className='content'>
                                                        <p>{post.acf.client} <span>{post.acf.project_type}</span></p>
                                                    </div>
                                                    <div className="overlay"></div>
                                                    <img
                                                        src={post.acf.splash.sizes.thumbnail} 
                                                        srcSet={
                                                                `${post.acf.splash.sizes.medium} 640w, 
                                                                ${post.acf.splash.sizes.large} 960w, 
                                                                ${post.acf.splash.sizes['1536x1536']} 2048w`} 
                                                        alt={post.acf.client} />
                                                </div>
                                                
                                                {activeIndex !== null && activeIndex === index ? (<WorkGallery key={index} activeIndex={activeIndex} onClick={closeGallery} post={post} />) : ''}
                                            </Fragment>
                                        )
                                    }))}
                                    {displayedPosts.length < 1 ? ([1,2,3,4,5].map((n) => {
                                        return (
                                            <div key={n} className="section shell">
                                                <SkeletonWork key={n} />
                                            </div>
                                        )
                                    })) : ''}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
 
export default Work;