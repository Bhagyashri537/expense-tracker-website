import { useState } from "react"
import React from "react"

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logOut: () => {}
})

export const AuthContextProvider = (props) => {
    const initailToken = localStorage.setItem('token')

    const [token, setToken] = useState(initailToken)

    //if token is empty string then it return false else it return true
    const userIsLoggedIn = !!token

    const loginHandler = (token) => {
      setToken(true)
      localStorage.setItem('token', token)
    }

    const logoutHandler = ()=>{
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logOut: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;