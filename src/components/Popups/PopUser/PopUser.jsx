import * as S from '../../../Styles/PopUser.styled'

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
                <a href="#popExit">Выйти</a>
            </S.PopUserExitBtn>
        </S.PopUserSet>
    )
}

export default PopUser
