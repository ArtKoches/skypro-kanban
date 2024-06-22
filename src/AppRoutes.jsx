import { Wrapper } from './Styles/Common.styled'
import { GlobalStyle } from './Styles/Global.styled'
import { Route, Routes } from 'react-router-dom'
import { routePaths } from './lib/routes'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'

function AppRoutes() {
    return (
        <>
            <Wrapper>
                <GlobalStyle />
                <Routes>
                    <Route path={routePaths.MAIN} element={<Home />} />
                    <Route path={routePaths.LOGIN} element={<Login />} />
                    <Route path={routePaths.REGISTER} element={<Register />} />
                    <Route path={routePaths.CARD_ID} element={''} />
                    <Route path={routePaths.NOT_FOUND} element={<NotFound />} />
                </Routes>
            </Wrapper>
        </>
    )
}

export default AppRoutes
