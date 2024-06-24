import * as S from './PopExit.styled'
import PopExitForm from './PopExitForm'

function PopExit({ toggleAuth }) {
    return (
        <>
            <S.PopExit id="popExit">
                <S.PopExitContainer>
                    <S.PopExitBlock>
                        <S.PopExitTitle>
                            <h2>Выйти из аккаунта?</h2>
                        </S.PopExitTitle>

                        <PopExitForm toggleAuth={toggleAuth} />
                    </S.PopExitBlock>
                </S.PopExitContainer>
            </S.PopExit>
        </>
    )
}

export default PopExit
