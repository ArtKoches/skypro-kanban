import { useState } from 'react'
import { routePaths } from './lib/routes'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Home from './pages/Home/Home'
import CardBrowse from './pages/CardBrowse/CardBrowse'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import LogOut from './pages/LogOut/LogOut'
import CreateTask from './pages/CreateTask/CreateTask'
import { localStorage } from './lib/helpers'

function AppRoutes({ toggleTheme }) {
    const [isUser, setIsUser] = useState(localStorage.getUser)
    const navigate = useNavigate()

    function signIn(user) {
        setIsUser(user)
        localStorage.saveUser(user)
        navigate(routePaths.MAIN)
    }

    function signOut(user) {
        localStorage.removeUser(user)
        navigate(routePaths.LOGIN)
    }

    function getToken() {
        const token = isUser ? `Bearer ${isUser.token}` : undefined
        return token
    }

    return (
        <>
            <Routes>
                <Route element={<PrivateRoute isUser={isUser} />}>
                    <Route
                        path={routePaths.MAIN}
                        element={
                            <Home
                                toggleTheme={toggleTheme}
                                getToken={getToken}
                            />
                        }
                    />
                    <Route path={routePaths.CARD} element={<CardBrowse />} />
                    <Route path={routePaths.CREATE} element={<CreateTask />} />
                    <Route
                        path={routePaths.EXIT}
                        element={<LogOut signOut={signOut} />}
                    />
                </Route>

                <Route
                    path={routePaths.LOGIN}
                    element={<Login signIn={signIn} />}
                />
                <Route
                    path={routePaths.REGISTER}
                    element={<Register signIn={signIn} />}
                />
                <Route path={routePaths.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRoutes
