import { useState } from 'react'
import PopUser from '../Popups/PopUser/PopUser'

function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdownUserInfo = () => setIsOpen(prevState => !prevState)

    return (
        <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
            </button>

            <a
                // href="#user-set-target"
                onClick={toggleDropdownUserInfo}
                className="header__user _hover02"
            >
                Ivan Ivanov
            </a>

            {isOpen && <PopUser />}
        </nav>
    )
}

export default HeaderNav
