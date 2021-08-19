import React from "react"
import {useParams} from "react-router-dom"

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config"

//Components
import Grid from "./grid"
import Spinner from "./spinner"
import BreadCrumb from "./breadCrumb"
import MovieInfo from "./movieInfo"
import MovieInfoBar from "./movieInfoBar"
import Actor from "./actor"

import { useMovieFetch } from "../hooks/useMovieFetch"

import NoImage from "../images/no_image.jpg"


const Movie = () => {
    const {movieId} = useParams()

    const {state: movie, loading, error} = useMovieFetch(movieId)

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong ...</div>

    console.log(movie.actors)

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}            
            />
            <Grid header="Actors">
                {movie.actors.slice(0,10).map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? (IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path)
                            : NoImage
                        }
                    />)
                )}
            </Grid>
        </>
    )

}

export default Movie