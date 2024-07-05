import * as S from './Header.styled'
import { Container } from '../../Common.styled'
import HeaderNav from './HeaderNav'
import { Link } from 'react-router-dom'
import { routePaths } from '../../lib/routes'
import { useThemeContext } from '../../contexts/Theme/useThemeContext'

function Header() {
    const { toggleLogoPath } = useThemeContext()

    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <Link to={routePaths.MAIN}>
                            <img src={toggleLogoPath()} alt="logo" />
                        </Link>
                    </S.HeaderLogo>

                    <HeaderNav />
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}

export default Header
