import * as S from './Column.styled'
import Card from '../Card/Card'

function Column({ title, cardList }) {
    return (
        <S.Column>
            <S.ColumnTitle>
                <p>{title}</p>
            </S.ColumnTitle>

            {cardList.map(task => (
                <Card
                    key={task._id}  
                    id={task.id}
                    topic={task.topic}
                    title={task.title}
                    date={task.date}
                />
            ))}
        </S.Column>
    )
}

export default Column
