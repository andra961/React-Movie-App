import React, {useState, useEffect, useRef} from "react"
import PropTypes from "prop-types"

import searchIcon from "../images/search-icon.svg"

import "./searchBar.css"

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState("Search Movie")
    const initial = useRef(true)


    useEffect(() => {
        if(initial.current) {
            initial.current = false
            return
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)
    },[setSearchTerm, state])

    const onChange = (e) => setState(e.currentTarget.value)


    return (
        <div className="wrapperSearch">
            <div className="contentSearch">
                <img src={searchIcon} alt="search-icon"/>
                <input type="text" value={state} onChange={onChange}></input>
            </div>
        </div>
    )   
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar