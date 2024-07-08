import * as S from './PopNewCard.styled'
import PopNewCardForm from './PopNewCardForm'
import Calendar from '../../Calendar/Calendar'
import { routePaths } from '../../../lib/routes'
import { color } from '../../../lib/topic'
import { useState } from 'react'
import { kanbanApi } from '../../../api'
import { ErrorMessage } from '../../../Common.styled'
import { useUserContext } from '../../../contexts/User/useUserContext'
import { useNavigate } from 'react-router-dom'

function PopNewCard() {
    const { getToken } = useUserContext()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [newCard, setNewCard] = useState({
        title: '',
        topic: '',
        description: '',
        date: new Date(),
    })

    function onChange(event) {
        const { name, value } = event.target
        setNewCard({ ...newCard, [name]: value })
    }

    async function onTaskCreate(event) {
        try {
            event.preventDefault()

            if (
                !newCard.title.trim() ||
                !newCard.topic.trim() ||
                !newCard.description.trim()
            ) {
                throw new Error('Некорректный ввод/Заполните все поля')
            }

            await kanbanApi
                .createTask({ task: newCard, token: getToken() })
                .finally(() => navigate(routePaths.MAIN))
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <S.PopNewCard>
                <S.PopNewCardContainer>
                    <S.PopNewCardBlock>
                        <S.PopNewCardContent>
                            <S.PopNewCardTitle>
                                Создание задачи
                            </S.PopNewCardTitle>

                            <S.PopNewCardClose to={routePaths.MAIN}>
                                ✖
                            </S.PopNewCardClose>

                            <S.PopNewCardWrap>
                                <PopNewCardForm
                                    newCard={newCard}
                                    onChange={onChange}
                                />

                                <Calendar
                                    selected={newCard.date}
                                    setSelected={date =>
                                        setNewCard({ ...newCard, date })
                                    }
                                />
                            </S.PopNewCardWrap>

                            <S.Categories>
                                <S.CategoriesSubtitle>
                                    Категория
                                </S.CategoriesSubtitle>

                                <S.CategoriesTopics>
                                    <input
                                        id="radio1"
                                        type="radio"
                                        name="topic"
                                        value="Web Design"
                                        onChange={onChange}
                                    />
                                    <S.TopicLabel
                                        $topic={color.orange}
                                        htmlFor="radio1"
                                    >
                                        Web Design
                                    </S.TopicLabel>

                                    <input
                                        id="radio2"
                                        type="radio"
                                        name="topic"
                                        value="Research"
                                        onChange={onChange}
                                    />
                                    <S.TopicLabel
                                        $topic={color.green}
                                        htmlFor="radio2"
                                    >
                                        Research
                                    </S.TopicLabel>

                                    <input
                                        id="radio3"
                                        type="radio"
                                        name="topic"
                                        value="Copywriting"
                                        onChange={onChange}
                                    />
                                    <S.TopicLabel
                                        $topic={color.purple}
                                        htmlFor="radio3"
                                    >
                                        Copywriting
                                    </S.TopicLabel>
                                </S.CategoriesTopics>
                            </S.Categories>

                            <ErrorMessage>{error}</ErrorMessage>
                            <S.FormNewCreateBtn onClick={onTaskCreate}>
                                Создать задачу
                            </S.FormNewCreateBtn>
                        </S.PopNewCardContent>
                    </S.PopNewCardBlock>
                </S.PopNewCardContainer>
            </S.PopNewCard>
        </>
    )
}

export default PopNewCard
