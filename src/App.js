import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'
import { useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])

  const handleClick = () => {
    setCharacters(characterResponse.results)
  }

  return (
    <div>
      <Header title="Character Gallery" />
      <button onClick={handleClick}>Load characters</button>
      <CharacterGallery characters={characters} />
    </div>
  )
}

export default App
