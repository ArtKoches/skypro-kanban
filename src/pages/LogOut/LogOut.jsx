import { Outlet } from 'react-router-dom'
import PopExit from '../../components/Popups/PopExit/PopExit'

function LogOut({ signOut }) {
    return (
        <>
            <Outlet />
            <PopExit signOut={signOut} />
        </>
    )
}

export default LogOut
