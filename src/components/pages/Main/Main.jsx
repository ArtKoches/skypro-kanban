import ColumnComponent from './Column'

function MainComponent() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        <ColumnComponent />
                        <ColumnComponent />
                        <ColumnComponent />
                        <ColumnComponent />
                        <ColumnComponent />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainComponent
