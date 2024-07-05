import { routePaths } from './lib/routes'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Home from './pages/Home/Home'
import CardBrowse from './pages/CardBrowse/CardBrowse'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import LogOut from './pages/LogOut/LogOut'
import CreateTask from './pages/CreateTask/CreateTask'

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path={routePaths.MAIN} element={<Home />}>
                        <Route
                            path={routePaths.CARD}
                            element={<CardBrowse />}
                        />
                        <Route
                            path={routePaths.CREATE}
                            element={<CreateTask />}
                        />
                        <Route path={routePaths.EXIT} element={<LogOut />} />
                    </Route>
                </Route>

                <Route path={routePaths.LOGIN} element={<Login />} />
                <Route path={routePaths.REGISTER} element={<Register />} />
                <Route path={routePaths.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRoutes
