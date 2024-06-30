import * as S from './Main.styled'
import { Container } from '../../Common.styled'
import { statusList } from '../../lib/data'
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
                                tasks={cards.filter(
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
