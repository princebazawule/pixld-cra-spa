import React from "react"

const Overlay = (props) => {
    return ( 
        <div className="overlay-container">
            <div className="title-overlay">{props.title}</div>
        </div>
     )
}
 
export default Overlay;