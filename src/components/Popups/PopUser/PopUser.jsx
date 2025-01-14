import { Link } from 'react-router-dom'
import * as S from './PopUser.styled'
import { routePaths } from '../../../lib/routes'
import { useThemeContext } from '../../../contexts/Theme/useThemeContext'
import { useUserContext } from '../../../contexts/User/useUserContext'

function PopUser() {
    const { toggleTheme } = useThemeContext()
    const { user } = useUserContext()

    return (
        <S.PopUserSet>
            <S.PopUserSetName>{user.name}</S.PopUserSetName>
            <S.PopUserSetMail>{user.login}</S.PopUserSetMail>

            <S.PopUserSetTheme>
                <p>Темная тема</p>
                <input onClick={toggleTheme} type="checkbox" name="checkbox" />
            </S.PopUserSetTheme>

            <S.PopUserExitBtn type="button">
                <Link to={routePaths.EXIT}>Выйти</Link>
            </S.PopUserExitBtn>
        </S.PopUserSet>
    )
}

export default PopUser
