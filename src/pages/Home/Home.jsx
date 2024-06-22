import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import Main from '../../components/Main/Main'
import { cardList } from '../../data'

function Home() {
    const [cards, setCards] = useState(cardList)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadingTime = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(loadingTime)
    }, [isLoading])

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
            <Header onCardAdd={onCardAdd} />
            {isLoading ? <Loading /> : <Main cards={cards} />}
        </>
    )
}

export default Home
