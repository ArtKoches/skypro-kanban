import './App.css'
import MainComponent from './components/pages/Main/Main'
import HeaderComponent from './components/Header/Header'
import PopBrowseComponent from './components/popups/PopBrowse'
import PopNewCardComponent from './components/popups/PopNewCard'
import PopExitComponent from './components/popups/PopExit'

function App() {
    return (
        <div className="wrapper">
            {/* pop-up start*/}

            <PopExitComponent />

            <PopNewCardComponent />

            <PopBrowseComponent />

            {/* pop-up end*/}

            <HeaderComponent />

            <MainComponent />
        </div>
    )
}

export default App
