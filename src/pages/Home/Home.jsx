import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import Main from '../../components/Main/Main'
import { Outlet } from 'react-router-dom'
import { kanbanApi } from '../../api'

function Home({ getToken }) {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        kanbanApi
            .getTasks({ token: getToken() })
            .then(tasks => setCards(tasks))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [getToken])

    function onCardAdd(event) {
        event.preventDefault()
        const newDate = new Date().toLocaleDateString()

        const newCard = {
            id: cards.length + 1,
            topic: 'Web Design',
            title: 'Новая задача',
            date: newDate,
            status: 'Без статуса',
        }

        setCards([...cards, newCard])
    }

    return (
        <>
            <Outlet />
            <Header onCardAdd={onCardAdd} />

            {error ? (
                <div>{error}</div>
            ) : isLoading ? (
                <Loading />
            ) : (
                <Main cards={cards} />
            )}
        </>
    )
}

export default Home
