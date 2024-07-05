import * as S from '../../Common.styled'
import { routePaths } from '../../lib/routes'
import { useState } from 'react'
import { userApi } from '../../api'
import { useUserContext } from '../../contexts/User/useUserContext'

function Register() {
    const { signIn } = useUserContext()
    const [authData, setAuthData] = useState({
        login: '',
        name: '',
        password: '',
    })
    const [error, setError] = useState(null)

    function onChange(event) {
        const { name, value } = event.target
        setAuthData({ ...authData, [name]: value })
    }

    async function onSubmit(event) {
        try {
            event.preventDefault()

            if (
                !authData.login.trim() ||
                !authData.name.trim() ||
                !authData.password.trim()
            ) {
                throw new Error('Некорректный ввод')
            }

            await userApi.userReg(authData).then(signIn)
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
                            <h2>Регистрация</h2>
                        </S.ModalTitle>

                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalRegInput
                                type="text"
                                name="name"
                                id="first-name"
                                placeholder="Имя"
                                value={authData.name}
                                onChange={onChange}
                            />

                            <S.ModalRegInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                                value={authData.login}
                                onChange={onChange}
                            />

                            <S.ModalRegInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                                value={authData.password}
                                onChange={onChange}
                            />

                            <S.ErrorMessage>{error}</S.ErrorMessage>
                            <S.ModalBtn onClick={onSubmit}>
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
