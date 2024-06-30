import * as S from './Header.styled'
import { Container } from '../../Common.styled'
import HeaderNav from './HeaderNav'
import { Link } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

function Header({ logo, toggleTheme, onCardAdd }) {
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <Link to={routePaths.MAIN}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </S.HeaderLogo>

                    <HeaderNav
                        toggleTheme={toggleTheme}
                        onCardAdd={onCardAdd}
                    />
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}

export default Header
