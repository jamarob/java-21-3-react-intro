import './App.css'
import Header from './components/Header'
import CharacterGallery from './components/CharacterGallery'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './services/rick-and-morrty-api-service'

function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .catch(error => console.error(error))
  }, [])

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
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="Search character"
      />
      {filteredCharacters.length === 0 && <p>No characters found 🤷‍️</p>}
      {filteredCharacters.length === 0 || (
        <CharacterGallery characters={filteredCharacters} />
      )}
    </div>
  )
}

export default App
