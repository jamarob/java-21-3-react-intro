import './CharacterGallery.css'
import CharacterCard from './CharacterCard'

export default function CharacterGallery(props) {
  return (
    <section className="character-gallery">
      {props.characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  )
}
