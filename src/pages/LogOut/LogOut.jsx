import PopExit from '../../components/Popups/PopExit/PopExit'

function LogOut({ toggleAuth }) {
    return (
        <>
            <PopExit toggleAuth={toggleAuth} />
        </>
    )
}

export default LogOut
