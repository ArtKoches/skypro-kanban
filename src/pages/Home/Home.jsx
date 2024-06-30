import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import Main from '../../components/Main/Main'
import { Outlet } from 'react-router-dom'
import { kanbanApi } from '../../api'
import { ErrorMessage } from '../../Common.styled'

function Home({ toggleTheme, getToken }) {
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
            <Header toggleTheme={toggleTheme} onCardAdd={onCardAdd} />

            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : isLoading ? (
                <Loading />
            ) : (
                <Main cards={cards} />
            )}
        </>
    )
}

export default Home
