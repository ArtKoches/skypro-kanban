import * as S from '../../Common.styled'
import { routePaths } from '../../lib/routes'
import { useState } from 'react'
import { userApi } from '../../api'
import { useUserContext } from '../../contexts/User/useUserContext'
import { inputErrorHandler } from '../../lib/helpers'

function Register() {
    const { signIn } = useUserContext()
    const [error, setError] = useState(null)
    const [regData, setRegData] = useState({
        name: '',
        login: '',
        password: '',
    })

    function onChange(event) {
        const { name, value } = event.target
        setRegData({ ...regData, [name]: value })
    }

    async function onSubmit(event) {
        try {
            event.preventDefault()
            inputErrorHandler.regUser({ data: regData })

            if (error) {
                setError(null)
            }

            await userApi.userReg(regData).then(signIn)
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
                                value={regData.name}
                                onChange={onChange}
                                $error={error}
                            />

                            <S.ModalRegInput
                                type="text"
                                name="login"
                                id="loginReg"
                                placeholder="Эл. почта"
                                value={regData.login}
                                onChange={onChange}
                                $error={error}
                            />

                            <S.ModalRegInput
                                type="password"
                                name="password"
                                id="passwordFirst"
                                placeholder="Пароль"
                                value={regData.password}
                                onChange={onChange}
                                $error={error}
                            />

                            <S.ErrorMessage>{error}</S.ErrorMessage>
                            <S.ModalBtn onClick={onSubmit} $error={error}>
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
