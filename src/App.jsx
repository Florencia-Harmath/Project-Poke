import React, { useState, useEffect } from "react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import Button from "./components/button";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    console.log("pokemonId changed to:", pokemonId);
    getEvolutions(pokemonId);
  }, [pokemonId]);

  async function getEvolutions(id) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
      const data = await res.json();
      setPokemonName(data.chain.species.name);
      console.log(data.chain.species.name)
    } catch (error) {
      console.error(error);
    }
  }

  function prevClick() {
    console.log("Prev clicked");
    setPokemonId((prevPokemonId) => (prevPokemonId === 1 ? 1 : prevPokemonId - 1));
  }

  function nextClick() {
    console.log("Next clicked");
    setPokemonId((prevPokemonId) => prevPokemonId + 1);
  }

  return (
    <>
      <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />

      {pokemonName}

      <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
    </>
  );
};

export default App;

