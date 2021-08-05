import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'

function App() {
  const characters = characterResponse.results

  return (
    <div>
      <Header title="Character Gallery" />
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default App
