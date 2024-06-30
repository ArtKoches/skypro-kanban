import * as S from '../../Common.styled'
import { useState } from 'react'
import { routePaths } from '../../lib/routes'
import { userApi } from '../../api'

function Login({ signIn }) {
    const [authData, setAuthData] = useState({ login: '', password: '' })
    const [error, setError] = useState(null)

    function onChange(event) {
        const { name, value } = event.target
        setAuthData({ ...authData, [name]: value })
    }

    async function onSubmit(event) {
        try {
            event.preventDefault()

            if (!authData.login.trim() || !authData.password.trim()) {
                throw new Error('Некорректный ввод')
            }

            await userApi.userAuth(authData).then(signIn)
        } catch (error) {
            setError(error.message)
        }
    }

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
                                value={authData.login}
                                onChange={onChange}
                            />

                            <S.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                                value={authData.password}
                                onChange={onChange}
                            />

                            <S.ErrorMessage>{error}</S.ErrorMessage>
                            <S.ModalBtn onClick={onSubmit}>Войти</S.ModalBtn>

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
