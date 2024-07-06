import * as S from './PopNewCard.styled'
import PopNewCardForm from './PopNewCardForm'
import Calendar from '../../Calendar/Calendar'
import { routePaths } from '../../../lib/routes'
import { color } from '../../../lib/topic'
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

            if (
                !newCard.title.trim() ||
                !newCard.topic.trim() ||
                !newCard.description.trim()
            ) {
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
                                    $topic={color.orange}
                                    htmlFor="radio1"
                                >
                                    <input
                                        id="radio1"
                                        type="radio"
                                        name="topic"
                                        value="Web Design"
                                        onChange={onChange}
                                    />
                                    Web Design
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topic={color.green}
                                    htmlFor="radio2"
                                >
                                    <input
                                        id="radio2"
                                        type="radio"
                                        name="topic"
                                        value="Research"
                                        onChange={onChange}
                                    />
                                    Research
                                </S.CategoriesTheme>

                                <S.CategoriesTheme
                                    $topic={color.purple}
                                    htmlFor="radio3"
                                >
                                    <input
                                        id="radio3"
                                        type="radio"
                                        name="topic"
                                        value="Copywriting"
                                        onChange={onChange}
                                    />
                                    Copywriting
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
