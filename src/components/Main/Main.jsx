import { cardList, statusList } from '../../data'
import Column from '../Column/Column'

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {statusList.map(status => (
                            <Column
                                key={status}
                                title={status}
                                cardList={cardList.filter(
                                    card => card.status === status,
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
