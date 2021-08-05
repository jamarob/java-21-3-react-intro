import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'
import { useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])

  const loadCharacters = () => {
    setCharacters(characterResponse.results)
  }

  const clearCharacters = () => {
    setCharacters([])
  }

  return (
    <div>
      <Header title="Character Gallery" />
      <button onClick={loadCharacters}>Load characters</button>
      <button onClick={clearCharacters}>Clear Characters</button>
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default App
