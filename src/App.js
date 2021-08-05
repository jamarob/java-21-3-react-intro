import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import characterResponse from './characters-response.json'
import { useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('Rick')

  const loadCharacters = () => {
    setCharacters(characterResponse.results)
  }

  const clearCharacters = () => {
    setCharacters([])
  }

  const handleSearch = event => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Header title="Character Gallery" />
      <button onClick={loadCharacters}>Load characters</button>
      <button onClick={clearCharacters}>Clear Characters</button>
      <input type="text" onChange={handleSearch} value={search} />
      <CharacterGallery characters={filteredCharacters} />
    </div>
  )
}

export default App
