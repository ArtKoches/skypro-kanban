import { Outlet } from 'react-router-dom'
import PopExit from '../../components/Popups/PopExit/PopExit'

function LogOut({ toggleAuth }) {
    return (
        <>
            <Outlet />
            <PopExit toggleAuth={toggleAuth} />
        </>
    )
}

export default LogOut
