import React from 'react'

const WorkGallery = ({ onClick, activeIndex, post }) => {

    const project_shots = post.acf.project_shots

    const closeGallery = () => {
        onClick(null);
    }

    setTimeout(() => {
        const gallery = document.querySelector('.gallery');
        const galleryScroller = gallery.querySelector('.gallery-scroller');
        const galleryItemSize = galleryScroller.querySelector('div').clientWidth;
        
        const scrollToNextPage = () => {
            galleryScroller.scrollBy(galleryItemSize, 0);
        }

        const scrollToPrevPage = () => {
            galleryScroller.scrollBy(-galleryItemSize, 0);
        }

        gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
        gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

    }, 1000)

    return ( 
        <div className="project-detail">

            <div className="project-detail-content">
                
                <div className="header">
                    <p>{post.acf.client} <span>{post.acf.project_type}</span></p>
                </div>
                
                <div className='close'>
                    <button className="go-back" onClick={closeGallery}>
                        <span>✕</span>
                        close
                    </button>
                </div>

                <div id="gallery" className="gallery">
                    <div className="gallery-scroller">
                        {project_shots.map((shot, index) => {
                            return (
                                <div key={index} className='colored-card'>
                                    <img
                                        key={index}
                                        className='photo'
                                        src={shot.shots.sizes.thumbnail} 
                                        srcSet={
                                                `${shot.shots.sizes.medium} 300w, 
                                                ${shot.shots.sizes.large} 640w, 
                                                ${shot.shots.sizes['1536x1536']} 1000w`} 
                                        alt={post.acf.client} />
                                </div>
                            )
                        })}
                    </div>

                    <span className="btn prev">‹</span>
                    <span className="btn next">›</span>

                </div>
            </div>
        </div>
     )
}
 
export default WorkGallery;