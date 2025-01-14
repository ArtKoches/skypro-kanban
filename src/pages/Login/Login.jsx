import * as S from '../../Common.styled'
import { useState } from 'react'
import { routePaths } from '../../lib/routes'
import { userApi } from '../../api'
import { useUserContext } from '../../contexts/User/useUserContext'
import { inputErrorHandler } from '../../lib/helpers'

function Login() {
    const { signIn } = useUserContext()
    const [error, setError] = useState(null)
    const [authData, setAuthData] = useState({ login: '', password: '' })

    function onChange(event) {
        const { name, value } = event.target
        setAuthData({ ...authData, [name]: value })
    }

    async function onSubmit(event) {
        try {
            event.preventDefault()
            inputErrorHandler.authUser({ data: authData })

            if (error) {
                setError(null)
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
                                $error={error}
                            />

                            <S.ModalInput
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                                value={authData.password}
                                onChange={onChange}
                                $error={error}
                            />

                            <S.ErrorMessage>{error}</S.ErrorMessage>
                            <S.ModalBtn onClick={onSubmit} $error={error}>
                                Войти
                            </S.ModalBtn>

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
