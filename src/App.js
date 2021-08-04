import './App.css';
import Header from './components/Header'
import characterResponse from './characters-response.json'

function App() {
    const characters = characterResponse.results

    return <div>
        <Header title="Character Gallery"/>
        <CharacterCard character={characters[0]} />
        <CharacterCard character={characters[1]} />
    </div>
}

export default App;
