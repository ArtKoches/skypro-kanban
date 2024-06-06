import * as S from '../../Styles/Header.styled'
import { useState } from 'react'
import PopUser from '../Popups/PopUser/PopUser'

function HeaderNav({ onCardAdd }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdownUserInfo = () => setIsOpen(prevState => !prevState)

    return (
        <S.HeaderNav>
            <S.HeaderCreateBtn id="btnMainNew" onClick={onCardAdd}>
                <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderCreateBtn>

            <S.HeaderUser onClick={toggleDropdownUserInfo}>
                Ivan Ivanov
            </S.HeaderUser>

            {isOpen && <PopUser />}
        </S.HeaderNav>
    )
}

export default HeaderNav
