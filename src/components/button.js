import React from "react"
import PropTypes from "prop-types"

import "./button.css"

const Button = ({text, callback}) => {

    return (
        <button className="wrapperButton" type="button" onClick={callback}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
}

export default Button