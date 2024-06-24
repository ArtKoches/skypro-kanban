import { Navigate, Outlet } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

function PrivateRoute({ isAuth }) {
    return <>{isAuth ? <Outlet /> : <Navigate to={routePaths.LOGIN} />} </>
}

export default PrivateRoute
