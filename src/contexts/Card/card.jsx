import { createContext, useState } from 'react'

export const CardContext = createContext(null)

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)

    const findTask = id => {
        return cards.find(task => task._id === id)
    }

    return (
        <CardContext.Provider
            value={{ cards, setCards, findTask, loading, setLoading }}
        >
            {children}
        </CardContext.Provider>
    )
}
