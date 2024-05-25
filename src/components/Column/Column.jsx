import Card from '../Card/Card'

function Column({ title, cardList }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>

            {cardList.map(task => (
                <Card
                    key={task.id}
                    topic={task.topic}
                    title={task.title}
                    date={task.date}
                />
            ))}
        </div>
    )
}

export default Column
