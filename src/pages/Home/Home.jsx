import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import Main from '../../components/Main/Main'
// import { cardList } from '../../data'
import { Outlet } from 'react-router-dom'
import { kanbanApi } from '../../api'

function Home({ getToken }) {
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        kanbanApi
            .getTasks({ token: getToken() })
            .then(tasks => setCards(tasks))
            .finally(() => setIsLoading(false))
    }, [])

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
            {isLoading ? <Loading /> : <Main cards={cards} />}
        </>
    )
}

export default Home
