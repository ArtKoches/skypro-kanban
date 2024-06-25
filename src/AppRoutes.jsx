import { Wrapper } from './Styles/Common.styled'
import { GlobalStyle } from './Styles/Global.styled'
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

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()

    function toggleAuth() {
        setIsAuth(prev => !prev)
        navigate(routePaths.MAIN)
    }

    return (
        <>
            <Wrapper>
                <GlobalStyle />

                <Routes>
                    <Route element={<PrivateRoute isAuth={isAuth} />}>
                        <Route path={routePaths.MAIN} element={<Home />} />

                        <Route
                            path={routePaths.CARD}
                            element={<CardBrowse />}
                        />
                        <Route
                            path={routePaths.CREATE}
                            element={<CreateTask />}
                        />
                        <Route
                            path={routePaths.EXIT}
                            element={<LogOut toggleAuth={toggleAuth} />}
                        />
                    </Route>

                    <Route
                        path={routePaths.LOGIN}
                        element={<Login toggleAuth={toggleAuth} />}
                    />
                    <Route
                        path={routePaths.REGISTER}
                        element={<Register toggleAuth={toggleAuth} />}
                    />
                    <Route
                        path={routePaths.NOT_FOUND}
                        element={<NotFound toggleAuth={toggleAuth} />}
                    />
                </Routes>
            </Wrapper>
        </>
    )
}

export default AppRoutes
