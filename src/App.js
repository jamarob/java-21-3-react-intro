import './App.css';
import Header from './components/Header'
import CharacterCard from "./components/CharacterCard";
import characterResponse from './characters-response.json'

function App() {
    const characters = characterResponse.results

    return <div>
        <Header title="Character Gallery"/>
        <CharacterCard character={characters[0]} currywurst="foobar" />
        <CharacterCard character={characters[1]} currywurst="böahfasel" />
    </div>
}

export default App;
