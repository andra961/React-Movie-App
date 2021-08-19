import React, { useContext } from "react"

import {Link} from "react-router-dom"

import "./header.css"
import RMDBLogo from "../images/react-movie-logo.svg"
import TMDBLogo from "../images/tmdb_logo.svg"

//Context
import {Context} from "../context"

const Header = () => {

    const [user] = useContext(Context)

    return (
        <div className="wrapper">
            <div className="content">
                <Link to="/">
                    {
                    //<img id="RMDBLogo" src={RMDBLogo} alt="RMDBLogo"/>}
                    }
                    <h1> Movie React </h1>
                </Link>
                {user ? (
                    <span className="loggedin">Logged in as: {user.userName}</span>
                ) : (
                    <Link to="/login">
                        <span className="login">Log in</span>
                    </Link>
                )}
                <h1>TMDB</h1>
                {
                //<img id="TMDBLogo" src={TMDBLogo} alt="TMDBLogo"/>
                }
            </div>
        </div>
    )

}

export default Header