import './App.css'
import AppRoutes from './AppRoutes'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopBrowse from './components/Popups/PopBrowse/PopBrowse'

function App() {
    return (
        <>
            <AppRoutes />
            <PopExit />
            <PopNewCard />
            <PopBrowse />
        </>
    )
}

export default App
