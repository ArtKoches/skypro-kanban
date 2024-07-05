import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routePaths } from '../../lib/routes'

export const CardContext = createContext(null)

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const navigate = useNavigate()

    function updateCard(data) {
        setCards(data.cards)
        navigate(routePaths.MAIN)
    }

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
        <CardContext.Provider
            value={{ cards, setCards, updateCard, onCardAdd }}
        >
            {children}
        </CardContext.Provider>
    )
}
