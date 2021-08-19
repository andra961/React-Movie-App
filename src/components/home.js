import React from "react"

import "./home.css"

//config
import { BACKDROP_SIZE, IMAGE_BASE_URL} from "../config"

//Components

import HeroImage from "./heroImage"
import Grid from "./grid"
import Thumb from "./thumb"
import Spinner from "./spinner"
import SearchBar from "./searchBar"
import Button from "./button"

//Hooks
import {useHomeFetch} from "../hooks/useHomeFetch"

//Image
import NoImage from "../images/no_image.jpg"

const Home = () => {

    const {
        state, 
        loading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore
        } = useHomeFetch()

    console.log(state)

    if(error) return <div>Something went wrong ...</div>

    return (
        <>
            {!searchTerm && state.results[0] ?
            <HeroImage 
                image={IMAGE_BASE_URL + BACKDROP_SIZE + state.results[0].backdrop_path}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
            : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path 
                                ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)} />
            )}
        </>
    )

}

export default Home

