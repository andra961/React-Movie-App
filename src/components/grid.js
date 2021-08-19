import React from "react"
import PropTypes from "prop-types"

import "./grid.css"

const Grid = ({ header, children}) => {

    return (
        <div className="wrapperGrid">
            <h1>{header}</h1>
            <div className="contentGrid">
                {children}
            </div>
        </div>
    )
}

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid