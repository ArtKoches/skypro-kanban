import CardComponent from './Cards'

function ColumnComponent() {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>Без статуса</p>
            </div>

            <CardComponent />
        </div>
    )
}

export default ColumnComponent
