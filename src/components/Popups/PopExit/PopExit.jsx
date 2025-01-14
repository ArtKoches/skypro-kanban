import * as S from './PopExit.styled'
import PopExitForm from './PopExitForm'

function PopExit() {
    return (
        <>
            <S.PopExit>
                <S.PopExitContainer>
                    <S.PopExitBlock>
                        <S.PopExitTitle>
                            <h2>Выйти из аккаунта?</h2>
                        </S.PopExitTitle>

                        <PopExitForm />
                    </S.PopExitBlock>
                </S.PopExitContainer>
            </S.PopExit>
        </>
    )
}

export default PopExit
