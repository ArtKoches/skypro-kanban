import { Wrapper } from './Common.styled'
import { GlobalStyle } from './Global.styled'
import AppRoutes from './AppRoutes'

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <AppRoutes />
            </Wrapper>
        </>
    )
}

export default App
