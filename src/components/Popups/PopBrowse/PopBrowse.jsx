import * as S from './PopBrowse.styled'
import PopBrowseForm from './PopBrowseForm'
import Calendar from '../../Calendar/Calendar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { routePaths } from '../../../lib/routes'
import { topicCategory } from '../../../lib/topic'
import { ErrorMessage } from '../../../Common.styled'
import { kanbanApi } from '../../../api'
import { useUserContext } from '../../../contexts/User/useUserContext'
import { useCardContext } from '../../../contexts/Card/useCardContext'

function PopBrowse() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { getToken } = useUserContext()
    const { findTask } = useCardContext()
    const [error, setError] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const foundTask = findTask(id)
    const [editTask, setEditTask] = useState({
        status: '',
        description: '',
        date: new Date(),
    })

    const toggleTaskEdit = () => {
        setIsEdit(prev => !prev)
    }

    function onChange(event) {
        const { name, value } = event.target
        setEditTask({ ...editTask, [name]: value })
    }

    async function onTaskDelete(event) {
        try {
            event.preventDefault()

            await kanbanApi
                .deleteTask({ taskId: id, token: getToken() })
                .finally(() => navigate(routePaths.MAIN))
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <S.PopBrowse.wrapper>
                <S.PopBrowse.container>
                    <S.PopBrowse.block>
                        <S.PopBrowse.content>
                            <S.PopBrowse.top_block>
                                <S.PopBrowse.title>
                                    {foundTask?.title}
                                </S.PopBrowse.title>

                                <S.PopBrowse.topic_category
                                    $topic={topicCategory[foundTask?.topic]}
                                >
                                    <p>{foundTask?.topic}</p>
                                </S.PopBrowse.topic_category>
                            </S.PopBrowse.top_block>

                            <S.PopBrowse.status>
                                <S.PopBrowse.status_subtitle>
                                    Статус
                                </S.PopBrowse.status_subtitle>

                                <S.PopBrowse.topic_statuses>
                                    {!isEdit ? (
                                        <S.PopBrowse.topic_status $current>
                                            <p>{foundTask?.status}</p>
                                        </S.PopBrowse.topic_status>
                                    ) : (
                                        <>
                                            <input
                                                id="status1"
                                                type="radio"
                                                name="status"
                                                value="Без статуса"
                                                onChange={onChange}
                                            />
                                            <S.PopBrowse.topic_status htmlFor="status1">
                                                Без статуса
                                            </S.PopBrowse.topic_status>

                                            <input
                                                id="status2"
                                                type="radio"
                                                name="status"
                                                value="Нужно сделать"
                                                onChange={onChange}
                                            />
                                            <S.PopBrowse.topic_status htmlFor="status2">
                                                Нужно сделать
                                            </S.PopBrowse.topic_status>

                                            <input
                                                id="status3"
                                                type="radio"
                                                name="status"
                                                value="В работе"
                                                onChange={onChange}
                                            />
                                            <S.PopBrowse.topic_status htmlFor="status3">
                                                В работе
                                            </S.PopBrowse.topic_status>

                                            <input
                                                id="status4"
                                                type="radio"
                                                name="status"
                                                value="Тестирование"
                                                onChange={onChange}
                                            />
                                            <S.PopBrowse.topic_status htmlFor="status4">
                                                Тестирование
                                            </S.PopBrowse.topic_status>

                                            <input
                                                id="status5"
                                                type="radio"
                                                name="status"
                                                value="Готово"
                                                onChange={onChange}
                                            />
                                            <S.PopBrowse.topic_status htmlFor="status5">
                                                Готово
                                            </S.PopBrowse.topic_status>
                                        </>
                                    )}
                                </S.PopBrowse.topic_statuses>
                            </S.PopBrowse.status>

                            <S.PopBrowse.wrap>
                                <PopBrowseForm
                                    foundTask={foundTask}
                                    editTask={editTask}
                                    isEdit={isEdit}
                                    onChange={onChange}
                                />

                                <Calendar
                                    foundTask={foundTask}
                                    selected={editTask.date}
                                    setSelected={date =>
                                        setEditTask({ ...editTask, date })
                                    }
                                    disabled={isEdit ? false : true}
                                />
                            </S.PopBrowse.wrap>

                            <S.PopBrowse.down_topic>
                                <S.PopBrowse.down_topic_subtitle>
                                    Категория
                                </S.PopBrowse.down_topic_subtitle>

                                <S.PopBrowse.down_topic_category
                                    $topic={topicCategory[foundTask?.topic]}
                                >
                                    <p>{foundTask?.topic}</p>
                                </S.PopBrowse.down_topic_category>
                            </S.PopBrowse.down_topic>

                            {!isEdit ? (
                                <S.PopBrowseButtons.btn_browse>
                                    <S.PopBrowseButtons.btn_group>
                                        <button onClick={toggleTaskEdit}>
                                            Редактировать задачу
                                        </button>

                                        <button onClick={onTaskDelete}>
                                            Удалить задачу
                                        </button>

                                        <ErrorMessage>{error}</ErrorMessage>
                                    </S.PopBrowseButtons.btn_group>

                                    <S.PopBrowseButtons.btn_close>
                                        <Link to={routePaths.MAIN}>
                                            Закрыть
                                        </Link>
                                    </S.PopBrowseButtons.btn_close>
                                </S.PopBrowseButtons.btn_browse>
                            ) : (
                                <S.PopBrowseButtons.btn_browse>
                                    <S.PopBrowseButtons.btn_edit_group>
                                        <S.PopBrowseButtons.btn_save>
                                            <a href="#">Сохранить</a>
                                        </S.PopBrowseButtons.btn_save>

                                        <S.PopBrowseButtons.btn_cancel
                                            onClick={toggleTaskEdit}
                                        >
                                            Отменить
                                        </S.PopBrowseButtons.btn_cancel>

                                        <S.PopBrowseButtons.btn_delete
                                            onClick={onTaskDelete}
                                        >
                                            Удалить задачу
                                        </S.PopBrowseButtons.btn_delete>

                                        <ErrorMessage>{error}</ErrorMessage>
                                    </S.PopBrowseButtons.btn_edit_group>

                                    <S.PopBrowseButtons.btn_close>
                                        <Link to={routePaths.MAIN}>
                                            Закрыть
                                        </Link>
                                    </S.PopBrowseButtons.btn_close>
                                </S.PopBrowseButtons.btn_browse>
                            )}
                        </S.PopBrowse.content>
                    </S.PopBrowse.block>
                </S.PopBrowse.container>
            </S.PopBrowse.wrapper>
        </>
    )
}

export default PopBrowse
