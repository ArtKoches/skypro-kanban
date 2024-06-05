import './App.css'
import { useEffect, useState } from 'react'
import { cardList } from './data'
import { GlobalStyle } from './Styles/Global.styled'
import { Wrapper } from './Styles/Common.styled'

import Loading from './components/Loading/Loading'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
    const [cards, setCards] = useState(cardList)

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

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadingTime = setTimeout(() => setIsLoading(false), 2000)

        return () => clearTimeout(loadingTime)
    }, [isLoading])

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                {/* pop-up start*/}
                <PopExit />
                <PopNewCard />
                <PopBrowse />
                {/* pop-up end*/}

                <Header onCardAdd={onCardAdd} />
                {isLoading ? <Loading /> : <Main cards={cards} />}
            </Wrapper>
        </>
    )
}

export default App
