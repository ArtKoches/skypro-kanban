import * as S from './Main.styled'
import { Container } from '../../Styles/Common.styled'
import { statusList } from '../../data'
import Column from '../Column/Column'

function Main({ cards }) {
    return (
        <S.Main>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        {statusList.map(status => (
                            <Column
                                key={status}
                                title={status}
                                cardList={cards.filter(
                                    card => card.status === status,
                                )}
                            />
                        ))}
                    </S.MainContent>
                </S.MainBlock>
            </Container>
        </S.Main>
    )
}

export default Main
