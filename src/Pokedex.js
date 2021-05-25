import Pokecard from "./Pokecard";
import "./Pokedex.css";

/**Pokedex component - renders a pokecard for all Pokemons in pokemons array */
function Pokedex(props) {
  let pokedex = props.pokemons.map(p => {
    return (
    <Pokecard
      id={p.id}
      name={p.name}
      type={p.type}
      base_experience={p.base_experience}
      />
    )
  })

  return (
    <div className="Pokedex-div">
      {pokedex}
      <h4>Score: {props.score}</h4>
      <h2 className="Pokedex-winner">
        { props.isWinner ? "THIS HAND WINS!" : ""}
      </h2>
    </div>
  )
}

Pokedex.defaultProps = { pokemons: [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]};

export default Pokedex;
