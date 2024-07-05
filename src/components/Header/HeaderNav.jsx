import * as S from './Header.styled'
import { useState } from 'react'
import PopUser from '../Popups/PopUser/PopUser'
import { Link } from 'react-router-dom'
import { routePaths } from '../../lib/routes'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useCardContext } from '../../contexts/Card/useCardContext'

function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdownUserInfo = () => setIsOpen(prevState => !prevState)
    const { user } = useUserContext()
    const { onCardAdd } = useCardContext()

    return (
        <S.HeaderNav>
            <S.HeaderCreateBtn onClick={onCardAdd}>
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
