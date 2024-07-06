import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import Main from '../../components/Main/Main'
import { Outlet } from 'react-router-dom'
import { kanbanApi } from '../../api'
import { ErrorMessage } from '../../Common.styled'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useCardContext } from '../../contexts/Card/useCardContext'

function Home() {
    const { getToken } = useUserContext()
    const { cards, setCards } = useCardContext()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        kanbanApi
            .getTasks({ token: getToken() })
            .then(tasks => setCards(tasks))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [getToken, setCards])

    return (
        <>
            <Outlet />
            <Header />

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
