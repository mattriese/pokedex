import _ from "lodash";
import Pokedex from "./Pokedex";
import "./Pokegame.css";

/**
 * takes an array of pokemon as the value of the key pokemon
 */


function Pokegame(props) {
	let {pokemons} = props;
	let shuffledPokemon = _.shuffle(pokemons); // spe
	let handA = shuffledPokemon.slice(0, 4);
	let handB = shuffledPokemon.slice(4, 8)

	let handAScore = 0;
	for (let pokemon of handA) {
		handAScore += pokemon.base_experience;
	}
	let handBScore = 0;
	for (let pokemon of handB) {
		handBScore += pokemon.base_experience;
	}
	console.log("handAScore", handAScore);
	console.log("handBScore", handBScore);

	return (
	<div>

		<div className="Pokegame-A">
		<h2>Player A</h2>
			<Pokedex pokemons={handA}
							score={handAScore}
							isWinner={handAScore > handBScore}/>
		</div>
		<div className="Pokegame-B">
		<h2>Player B</h2>
		<Pokedex pokemons={handB}
							score={handBScore}
							isWinner={handBScore > handAScore}/>
							</div>
	</div>
	)
}

Pokegame.defaultProps = { pokemons: [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]};

export default Pokegame;
