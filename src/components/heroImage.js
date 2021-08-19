import React from "react"
import PropTypes from "prop-types"

import "./heroImage.css"



const HeroImage =  ({image, text, title}) => {

    const heroBackgroundStyle = {
        backgroundImage: `linear-gradient(
            to bottom, 
            rgba(0,0,0,0) 41%, 
            rgba(0,0,0,0.65) 100%
            ), url(${image})`, 
        backgroundPosition: "center",
        backgroundSize: "100%, cover"
    }

    return (
        <div className="wrapperHero" style={heroBackgroundStyle}>
            <div className="contentHero">
                <div className="text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>) 
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage