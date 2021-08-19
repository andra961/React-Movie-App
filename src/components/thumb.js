import React from "react"
import PropTypes from "prop-types"

import {Link} from "react-router-dom"

import "./thumb.css"

const Thumb = ({image, movieId, clickable}) => {

    return (
        <div>
            {clickable ? (
            <Link to={"/" + movieId}>
                <img className="imgThumb" src={image} alt="search bar"/>
            </Link> )
            : (
            <img className="imgThumb" src={image} alt="search bar"/>
            )}      
        </div>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb