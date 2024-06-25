import { Outlet } from 'react-router-dom'
import PopNewCard from '../../components/Popups/PopNewCard/PopNewCard'

function CreateTask() {
    return (
        <>
            <Outlet />
            <PopNewCard />
        </>
    )
}

export default CreateTask
