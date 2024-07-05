import { Wrapper } from './Common.styled'
import { GlobalStyle } from './Global.styled'
import { darkTheme, lightTheme } from './lib/theme'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './AppRoutes'
import { useThemeContext } from './contexts/Theme/useThemeContext'

function App() {
    const { theme } = useThemeContext()

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Wrapper>
                    <AppRoutes />
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default App
