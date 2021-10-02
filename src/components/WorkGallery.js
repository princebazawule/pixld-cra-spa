import React from 'react'
// import Work from './Work';

const WorkGallery = ({ onClick, activeIndex, post }) => {

    const project_shots = post.acf.project_shots

    // console.log(post)
    // console.log(project_shots)

    const closeGallery = () => {
        onClick(null);
    }


    setTimeout(() => {
        const gallery = document.querySelector('.gallery');
        const galleryScroller = gallery.querySelector('.gallery-scroller');
        const galleryItemSize = galleryScroller.querySelector('div').clientWidth;

        // For paginated scrolling, simply scroll the gallery one item in the given
        // direction and let css scroll snaping handle the specific alignment.
        
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
                                <div className='colored-card'>
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