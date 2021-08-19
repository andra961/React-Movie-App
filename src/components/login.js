import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import API from "../API"

//Style
import "./login.css"

//Components
import Button from "./button"
//Context
import { Context } from "../context"

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    console.log(Context)

    const [, setUser] = useContext(Context)
    console.log("User:")
    console.log(setUser)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        setError(false)
        try {
            const requestToken = await API.getRequestToken()
            const sessionId = await API.authenticate(
                requestToken,
                userName,
                password
            )

            console.log(sessionId)

            setUser({
                sessionId: sessionId.session_id, userName
            })

            navigate("/")

        } catch (error) {
            setError(true)
        }
    }

    const handleInput = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        if(name === "username") setUserName(value)
        if(name === "password") setPassword(password)
    }

    return (
        <div className="wrapperLogin">
            {error && <div className="error">There was an error!</div>}
            <label>Username:</label>
            <input 
                type="text"
                value="userName"
                name="username"
                onChange={handleInput} 
            />
            <input
                type="password"
                value="password"
                name="password"
                onChange={handleInput}
            />
            <Button text="Login" callback={handleSubmit} />
        </div>
    )
}

export default Login
