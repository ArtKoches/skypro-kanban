import * as S from './PopExit.styled'
import PopExitForm from './PopExitForm'

function PopExit({ signOut }) {
    return (
        <>
            <S.PopExit >
                <S.PopExitContainer>
                    <S.PopExitBlock>
                        <S.PopExitTitle>
                            <h2>Выйти из аккаунта?</h2>
                        </S.PopExitTitle>

                        <PopExitForm signOut={signOut} />
                    </S.PopExitBlock>
                </S.PopExitContainer>
            </S.PopExit>
        </>
    )
}

export default PopExit
