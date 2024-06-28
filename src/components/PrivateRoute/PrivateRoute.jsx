import { Navigate, Outlet } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

function PrivateRoute({ isUser }) {
    return <>{isUser ? <Outlet /> : <Navigate to={routePaths.LOGIN} />} </>
}

export default PrivateRoute
