import * as S from './PopBrowse.styled'
import PopBrowseForm from './PopBrowseForm'
import Calendar from '../../Calendar/Calendar'
import { Link, useParams } from 'react-router-dom'
import { routePaths } from '../../../lib/routes'
import { topicCategory } from '../../../lib/topic'
// import { useCardContext } from '../../../contexts/Card/useCardContext'

function PopBrowse() {
    const { id } = useParams()
    // const { cards, setCards } = useCardContext()

    return (
        <>
            <S.PopBrowse.wrapper>
                <S.PopBrowse.container>
                    <S.PopBrowse.block>
                        <S.PopBrowse.content>
                            <S.PopBrowse.top_block>
                                <S.PopBrowse.title>
                                    Название задачи:{id}
                                </S.PopBrowse.title>

                                <S.PopBrowse.topic_category
                                    $topicColor={topicCategory['Web Design']}
                                >
                                    <p>Web Design</p>
                                </S.PopBrowse.topic_category>
                            </S.PopBrowse.top_block>

                            <S.PopBrowse.status>
                                <S.PopBrowse.status_subtitle>
                                    Статус
                                </S.PopBrowse.status_subtitle>

                                <S.PopBrowse.topic_statuses>
                                    <S.PopBrowse.topic_status $hide>
                                        <p>Без статуса</p>
                                    </S.PopBrowse.topic_status>

                                    <S.PopBrowse.topic_status $current>
                                        <p>Нужно сделать</p>
                                    </S.PopBrowse.topic_status>

                                    <S.PopBrowse.topic_status $hide>
                                        <p>В работе</p>
                                    </S.PopBrowse.topic_status>

                                    <S.PopBrowse.topic_status $hide>
                                        <p>Тестирование</p>
                                    </S.PopBrowse.topic_status>

                                    <S.PopBrowse.topic_status $hide>
                                        <p>Готово</p>
                                    </S.PopBrowse.topic_status>
                                </S.PopBrowse.topic_statuses>
                            </S.PopBrowse.status>

                            <S.PopBrowse.wrap>
                                <PopBrowseForm />
                                <Calendar />
                            </S.PopBrowse.wrap>

                            <S.PopBrowse.down_topic>
                                <S.PopBrowse.down_topic_subtitle>
                                    Категория
                                </S.PopBrowse.down_topic_subtitle>

                                <S.PopBrowse.down_topic_category
                                    $topicColor={topicCategory['Web Design']}
                                >
                                    <p>Web Design</p>
                                </S.PopBrowse.down_topic_category>
                            </S.PopBrowse.down_topic>

                            <S.PopBrowseButtons.btn_browse>
                                <S.PopBrowseButtons.btn_group>
                                    <button>
                                        <a href="#">Редактировать задачу</a>
                                    </button>

                                    <button>
                                        <a href="#">Удалить задачу</a>
                                    </button>
                                </S.PopBrowseButtons.btn_group>

                                <S.PopBrowseButtons.btn_close>
                                    <Link to={routePaths.MAIN}>Закрыть</Link>
                                </S.PopBrowseButtons.btn_close>
                            </S.PopBrowseButtons.btn_browse>

                            <S.PopBrowseButtons.btn_browse $hide>
                                <S.PopBrowseButtons.btn_edit_group>
                                    <S.PopBrowseButtons.btn_save>
                                        <a href="#">Сохранить</a>
                                    </S.PopBrowseButtons.btn_save>

                                    <S.PopBrowseButtons.btn_cancel>
                                        <a href="#">Отменить</a>
                                    </S.PopBrowseButtons.btn_cancel>

                                    <S.PopBrowseButtons.btn_delete>
                                        <a href="#">Удалить задачу</a>
                                    </S.PopBrowseButtons.btn_delete>
                                </S.PopBrowseButtons.btn_edit_group>

                                <S.PopBrowseButtons.btn_close>
                                    <Link to={routePaths.MAIN}>Закрыть</Link>
                                </S.PopBrowseButtons.btn_close>
                            </S.PopBrowseButtons.btn_browse>
                        </S.PopBrowse.content>
                    </S.PopBrowse.block>
                </S.PopBrowse.container>
            </S.PopBrowse.wrapper>
        </>
    )
}

export default PopBrowse
