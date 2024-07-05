import * as S from './PopNewCard.styled'
import PopNewCardForm from './PopNewCardForm'
import Calendar from '../../Calendar/Calendar'
import { routePaths } from '../../../lib/routes'
import { topicCategory } from '../../../lib/topic'
import { useState } from 'react'
import { kanbanApi } from '../../../api'
import { ErrorMessage } from '../../../Common.styled'
import { useCardContext } from '../../../contexts/Card/useCardContext'

function PopNewCard() {
    const { updateCard } = useCardContext()
    const [error, setError] = useState(null)
    const [newCard, setNewCard] = useState({
        title: '',
        topic: '',
        description: '',
        date: '',
    })

    function onChange(event) {
        const { name, value } = event.target
        setNewCard({ ...newCard, [name]: value })
    }

    async function onSubmit(event) {
        try {
            event.preventDefault()

            if (!newCard.title.trim() || !newCard.description.trim()) {
                throw new Error('Некорректный ввод/Заполните все поля')
            }

            await kanbanApi.createTask(newCard).then(updateCard)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <S.PopNewCard>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>

                        <S.PopNewCardClose to={routePaths.MAIN}>
                            ✖
                        </S.PopNewCardClose>

                        <S.PopNewCardWrap>
                            <PopNewCardForm
                                newCard={newCard}
                                onChange={onChange}
                            />

                            <Calendar date={newCard.date} />
                        </S.PopNewCardWrap>

                        <S.Categories>
                            <S.CategoriesSubtitle>
                                Категория
                            </S.CategoriesSubtitle>

                            <S.CategoriesThemes>
                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Web Design']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Web Design
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Research']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Research
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topicColor={topicCategory['Copywriting']}
                                >
                                    <S.CategoriesThemeTitle>
                                        Copywriting
                                    </S.CategoriesThemeTitle>
                                </S.CategoriesTheme>
                            </S.CategoriesThemes>
                        </S.Categories>

                        <ErrorMessage>{error}</ErrorMessage>
                        <S.FormNewCreateBtn onClick={onSubmit}>
                            Создать задачу
                        </S.FormNewCreateBtn>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}

export default PopNewCard
