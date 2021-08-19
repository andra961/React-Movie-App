import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

import "./breadCrumb.css"

const BreadCrumb = ({movieTitle}) => {

    return(
        <div className="wrapperBread">
            <div className="contentBread">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </div>
        </div>
    )
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb