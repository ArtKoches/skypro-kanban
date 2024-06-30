import * as S from './Header.styled'
import { useState } from 'react'
import PopUser from '../Popups/PopUser/PopUser'
import { Link } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

function HeaderNav({ toggleTheme, onCardAdd }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdownUserInfo = () => setIsOpen(prevState => !prevState)

    return (
        <S.HeaderNav>
            <S.HeaderCreateBtn onClick={onCardAdd}>
                <Link to={routePaths.CREATE}>Создать новую задачу</Link>
            </S.HeaderCreateBtn>

            <S.HeaderUser onClick={toggleDropdownUserInfo}>
                Ivan Ivanov
            </S.HeaderUser>

            {isOpen && <PopUser toggleTheme={toggleTheme} />}
        </S.HeaderNav>
    )
}

export default HeaderNav
