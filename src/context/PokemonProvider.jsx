import React from "react";
import { useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  //LLAMADA A LA API
  const getAllPokemons = async (limit = 100) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    console.log(results);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
