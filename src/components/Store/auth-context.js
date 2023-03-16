import { useState } from "react"
import React from "react"

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token, email) => {},
    logOut: () => {}
})

export const AuthContextProvider = (props) => {
    const initailToken = localStorage.getItem('token')
    //const initailEmail = localStorage.getItem('email')

    const [token, setToken] = useState(initailToken)
    //const [Email, setEmail] = useState(initailEmail)

    //if token is empty string then it return false else it return true
    const userIsLoggedIn = !!token

    const loginHandler = (token) => {
      setToken(true)
      localStorage.setItem('token', token)
      //localStorage.setItem('email', email)
    }

    const logoutHandler = ()=>{
        setToken(null)
        localStorage.removeItem('token')
       // localStorage.removeItem('email')
    }

    const contextValue = {
        token: token,
       // email: email,
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