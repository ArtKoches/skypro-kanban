import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/User/user.jsx'
import { CardProvider } from './contexts/Card/card.jsx'
import { ThemeProvider } from './contexts/Theme/theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <CardProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </CardProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
