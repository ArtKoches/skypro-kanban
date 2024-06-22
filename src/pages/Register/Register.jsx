import * as S from '../../Styles/Common.styled'
import { routePaths } from '../../lib/routes'

function Register() {
    return (
        <S.ModalWrapper>
            <S.ModalContainer>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTitle>
                            <h2>Регистрация</h2>
                        </S.ModalTitle>

                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalRegInput
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder="Имя"
                            />

                            <S.ModalRegInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                            />

                            <S.ModalRegInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                            />

                            <S.ModalBtn id="SignUpEnter">
                                Зарегистрироваться
                            </S.ModalBtn>

                            <S.ModalFormGroup>
                                <p>
                                    Уже есть аккаунт? {''}
                                    <S.ModalLink to={routePaths.LOGIN}>
                                        Войдите здесь
                                    </S.ModalLink>
                                </p>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ModalContainer>
        </S.ModalWrapper>
    )
}

export default Register
