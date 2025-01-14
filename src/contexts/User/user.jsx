import { userFromLs } from '../../lib/helpers'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userFromLs.getUser)
    const navigate = useNavigate()

    useEffect(() => userFromLs.saveUser(user), [user])

    function getToken() {
        const token = user ? `Bearer ${user.token}` : undefined
        return token
    }

    function signIn(user) {
        setUser(user)
        userFromLs.saveUser(user)
        navigate(routePaths.MAIN)
    }

    function signOut(user) {
        userFromLs.removeUser(user)
        localStorage.removeItem('theme')
        navigate(routePaths.LOGIN)
    }

    return (
        <UserContext.Provider value={{ user, getToken, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}
