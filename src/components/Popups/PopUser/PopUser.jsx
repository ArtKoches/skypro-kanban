import { Link } from 'react-router-dom'
import * as S from './PopUser.styled'
import { routePaths } from '../../../lib/routes'

function PopUser() {
    return (
        <S.PopUserSet id="user-set-target">
            {/* <a href="">x</a> */}
            <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
            <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>

            <S.PopUserSetTheme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </S.PopUserSetTheme>

            <S.PopUserExitBtn type="button">
                <Link to={routePaths.EXIT}>Выйти</Link>
            </S.PopUserExitBtn>
        </S.PopUserSet>
    )
}

export default PopUser
