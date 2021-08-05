import './App.css';
import Header from './components/Header'
import CharacterCard from "./components/CharacterCard";
import characterResponse from './characters-response.json'

function App() {
    const characters = characterResponse.results

    return <div>
        <Header title="Character Gallery"/>
        <CharacterGallery characters={characters} />
    </div>
}

export default App;
