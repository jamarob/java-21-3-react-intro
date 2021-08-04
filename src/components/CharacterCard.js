import './CharacterCard.css'

export default function CharacterCard(props){
    return <section className="character-card">
        <h2 className="character-card__name">{props.character.name}</h2>
        <div className="character-card__origin">{props.character.origin.name}</div>
        <img className="character-card__image" src={props.character.image} alt=""/>
    </section>
}