import "./Pokecard.css";

/** Pokecard component - renders a pokecard with pokemon data passed in props*/
function Pokecard(props) {
    const BASE_POKEMON_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const { id, name, type, base_experience } = props
    return (
        <div className="Pokecard-div">
            <h2 className="Pokecard-name">{name}</h2>
            <img src={`${BASE_POKEMON_URL}${id}.png`} alt=""/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;