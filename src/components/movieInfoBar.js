import React from "react"
import PropTypes from "prop-types"

import "./movieInfoBar.css"

import {calcTime, convertMoney} from "../helpers"

const MovieInfoBar = ({time, budget, revenue}) => {

    return (
        <div className="wrapperBar">
            <div className="contentBar"> 
                <div className="column">
                    <p>Running time: {calcTime(time)}</p>
                </div>
                <div className="column">
                    <p>Budget: {convertMoney(budget)}</p>
                </div>
                <div className="column">
                    <p>Revenue: {convertMoney(revenue)}</p>
                </div>
            </div>
        </div>
    )

}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar