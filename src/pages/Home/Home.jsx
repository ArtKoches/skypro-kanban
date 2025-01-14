import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import { kanbanApi } from '../../api'
import { ErrorMessage } from '../../Common.styled'
import { useUserContext } from '../../contexts/User/useUserContext'
import { useCardContext } from '../../contexts/Card/useCardContext'

function Home() {
    const { getToken } = useUserContext()
    const { cards, setCards, setLoading } = useCardContext()
    const [error, setError] = useState(null)

    useEffect(() => {
        const getTasksFromApi = () => {
            kanbanApi
                .getTasks({ token: getToken() })
                .then(tasks => setCards(tasks))
                .catch(error => setError(error.message))
                .finally(() => setLoading(false))
        }
        getTasksFromApi()

        return () => setLoading(true)
    }, [getToken, setCards, setLoading])

    return (
        <>
            <Outlet />
            <Header />

            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : (
                <Main cards={cards} />
            )}
        </>
    )
}

export default Home
