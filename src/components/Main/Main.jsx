import * as S from './Main.styled'
import { Container } from '../../Common.styled'
import { statusList } from '../../lib/statuses'
import Column from '../Column/Column'

function Main({ cards }) {
    const infoMessage ='Список задач пустой, нажмите кнопку "Создать новую задачу", чтобы добавить задачу и отобразить ее на Kanban-доске...'

    return (
        <S.Main>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        {!cards.length
                            ? infoMessage
                            : statusList.map(status => (
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
