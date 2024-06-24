import { routePaths } from '../../lib/routes'
import * as S from '/src/Styles/Common.styled.js'

function Login({ toggleAuth }) {
    return (
        <S.ModalWrapper>
            <S.ModalContainer>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Вход</h2>
                        </S.ModalTitle>

                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalInput
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="Эл. почта"
                            />

                            <S.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />

                            <S.ModalBtn onClick={toggleAuth}>Войти</S.ModalBtn>

                            <S.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>

                                <S.ModalLink to={routePaths.REGISTER}>
                                    Регистрируйтесь здесь
                                </S.ModalLink>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ModalContainer>
        </S.ModalWrapper>
    )
}

export default Login
