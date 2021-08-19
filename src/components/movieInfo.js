import React, {useContext} from "react"
import API from "../API"
import PropTypes from "prop-types"

import "./movieInfo.css"

//Components
import Thumb from "./thumb"
import Rate from "./rate"

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config"

//Image
import NoImage from "../images/no_image.jpg"

//Context
import {Context} from "../context"

const MovieInfo = ({movie}) => {

    const [user] = useContext(Context)

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value)
        console.log(rate)
    }


    const wrapperStyle = {
        background: (movie.backdrop_path ?
        `url(${IMAGE_BASE_URL+BACKDROP_SIZE+movie.backdrop_path})`
        :
        "#000"), 
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return (
        <div className="wrapperMovie" style={wrapperStyle}>
            <div className="contentMovie">
                <Thumb 
                    image= {
                        movie.poster_path ?
                        IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        :
                        NoImage
                    }
                    clickable = {false}
                    alt = "movieThumb"
                    />
                <div className="textMovie">
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>

                        <div className="director">
                            <h3>DIRECTOR{movie.directors.lenght > 1 ? "S" : "" }</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                            <p>Rate movie</p>
                            <Rate callback={handleRating}/>
                        </div>
                    )}                
                </div>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo