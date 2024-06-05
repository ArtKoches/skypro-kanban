import * as S from '../../Styles/Header.styled'
import { Container } from '../../Styles/Common.styled'
import HeaderNav from './HeaderNav'

function Header({ onCardAdd }) {
    return (
        <S.Header>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogo>
                        <a target="_self">
                            <img src="/public/images/logo.png" alt="logo" />
                        </a>
                    </S.HeaderLogo>

                    <S.HeaderLogo>
                        <a target="_self">
                            <img
                                src="/public/images/logo_dark.png"
                                alt="logo"
                            />
                        </a>
                    </S.HeaderLogo>

                    <HeaderNav onCardAdd={onCardAdd} />
                </S.HeaderBlock>
            </Container>
        </S.Header>
    )
}

export default Header
