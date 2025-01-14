import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/User/user.jsx'
import { CardProvider } from './contexts/Card/card.jsx'
import { UseThemeProvider } from './contexts/Theme/theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <UseThemeProvider>
                <CardProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </CardProvider>
            </UseThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
