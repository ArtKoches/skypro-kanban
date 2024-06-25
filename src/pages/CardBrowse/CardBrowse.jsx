import { Outlet } from 'react-router-dom'
import PopBrowse from '../../components/Popups/PopBrowse/PopBrowse'

function CardBrowse() {
    return (
        <>
            <Outlet />
            <PopBrowse />
        </>
    )
}

export default CardBrowse
