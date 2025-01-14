import { Navigate, Outlet } from 'react-router-dom'
import { routePaths } from '../../lib/routes'
import { useUserContext } from '../../contexts/User/useUserContext'

function PrivateRoute() {
    const { user } = useUserContext()

    return <>{user ? <Outlet /> : <Navigate to={routePaths.LOGIN} />} </>
}

export default PrivateRoute
