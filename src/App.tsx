import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from "./Store"
import { GetPokemon } from './Actions/PokemonActions';

function App() {
  const dispatch = useDispatch()

  const [pokemonName, setPokemonName] = useState("")
  const pokemonState = useSelector((state: RootStore) => state.pokemon)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setPokemonName(event.target.value)

  const handleSubmit = () => dispatch(GetPokemon(pokemonName))

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {
        pokemonState && (
          <div>
            <img src={pokemonState?.sprites?.front_default} alt=""/>
            {
              pokemonState.abilities.map(ability => {
                return <p key={ability.ability.name}>{ability.ability.name}</p>
              })
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
