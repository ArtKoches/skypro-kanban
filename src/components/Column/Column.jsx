import * as S from './Column.styled'
import Card from '../Card/Card'
import { format } from 'date-fns'

function Column({ title, tasks }) {
    return (
        <S.Column>
            <S.ColumnTitle>
                <p>{title}</p>
            </S.ColumnTitle>

            {tasks.map((task, key) => (
                <Card
                    key={key}
                    id={task._id}
                    topic={task.topic}
                    title={task.title}
                    date={format(new Date(task.date), 'dd.MM.yy')}
                />
            ))}
        </S.Column>
    )
}

export default Column
