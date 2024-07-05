import { createContext, useState } from 'react'

export const CardContext = createContext(null)

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])

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
        <CardContext.Provider value={{ cards, setCards, onCardAdd }}>
            {children}
        </CardContext.Provider>
    )
}
