import * as S from './Header.styled'
import { useState } from 'react'
import PopUser from '../Popups/PopUser/PopUser'
import { Link } from 'react-router-dom'
import { routePaths } from '../../lib/routes'
import { useUserContext } from '../../contexts/User/useUserContext'

function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdownUserInfo = () => setIsOpen(prevState => !prevState)
    const { user } = useUserContext()

    return (
        <S.HeaderNav>
            <S.HeaderCreateBtn>
                <Link to={routePaths.CREATE}>Создать новую задачу</Link>
            </S.HeaderCreateBtn>

            <S.HeaderUser onClick={toggleDropdownUserInfo}>
                {user.name}
            </S.HeaderUser>

            {isOpen && <PopUser />}
        </S.HeaderNav>
    )
}

export default HeaderNav
