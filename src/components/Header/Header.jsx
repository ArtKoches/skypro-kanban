import HeaderNav from './HeaderNav'

function Header({ onCardAdd }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a target="_self">
                            <img src="/public/images/logo.png" alt="logo" />
                        </a>
                    </div>

                    <div className="header__logo _dark">
                        <a target="_self">
                            <img src="/public/images/logo_dark.png" alt="logo" />
                        </a>
                    </div>

                    <HeaderNav onCardAdd={onCardAdd} />
                </div>
            </div>
        </header>
    )
}

export default Header
