import React from "react"
import PropTypes from "prop-types"

import "./actor.css"

const Actor = ({name, character, imageUrl}) => {

    return(
        <div className="wrapperActor">
            <img className="imgActor" src={imageUrl} alt="actor-thumb"/>
            <h3>{name}</h3>
            <p>{character}</p>
        </div>
    )
}

Actor.propTypes = {
    name: PropTypes.string, 
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actor