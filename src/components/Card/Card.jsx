import * as S from './Card.styled'
import { topicCategory } from '../../lib/topic'
import { Link } from 'react-router-dom'
import { useCardContext } from '../../contexts/Card/useCardContext'
import { SkeletonLoad } from '../Skeleton/SkeletonLoad'

function Card({ id, topic, title, status, date }) {
    const { loading } = useCardContext()
    const readyTask = status === 'Готово'

    return (
        <S.Card>
            <S.CardItem>
                <S.CardWrapper>
                    <S.CardGroup>
                        {!loading ? (
                            <S.CardTopic $topic={topicCategory[topic]}>
                                <S.TopicText>{topic}</S.TopicText>
                            </S.CardTopic>
                        ) : (
                            <SkeletonLoad w={82} h={20} r={18} />
                        )}

                        {!loading ? (
                            <Link to={`/card/${id}`}>
                                <S.CardBtn>
                                    <div />
                                    <div />
                                    <div />
                                </S.CardBtn>
                            </Link>
                        ) : (
                            <SkeletonLoad w={18} h={4} r={0} />
                        )}
                    </S.CardGroup>

                    <S.CardContent>
                        {!loading ? (
                            <S.CardTitle $done={readyTask}>{title}</S.CardTitle>
                        ) : (
                            <SkeletonLoad w={113} h={13} r={0} />
                        )}

                        {!loading ? (
                            <S.CardDate>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={13}
                                    height={13}
                                    viewBox="0 0 13 13"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_1_415)">
                                        <path
                                            d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                                            stroke="#94A6BE"
                                            strokeWidth="0.8"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                                            stroke="#94A6BE"
                                            strokeWidth="0.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_415">
                                            <rect
                                                width={13}
                                                height={13}
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <S.CardDateTitle>{date}</S.CardDateTitle>
                            </S.CardDate>
                        ) : (
                            <SkeletonLoad w={58} h={13} r={0} />
                        )}
                    </S.CardContent>
                </S.CardWrapper>
            </S.CardItem>
        </S.Card>
    )
}

export default Card
