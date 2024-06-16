# Pokemon App
This project is a Pokemon application that fetches data from the PokeAPI and displays information about different Pokemon.

## Fetching Data from PokeAPI
This project fetches Pokemon data from the PokeAPI (https://pokeapi.co/). Here's how it's implemented:

## API Utility Functions
The utility functions getPokemonList and getPokemonListById are used to fetch Pokemon data from the PokeAPI.

- getPokemonList: Fetches a list of Pokemon from the PokeAPI.

- getPokemonListById(name: string): Fetches details of a specific Pokemon by its name from the PokeAPI.

Example usage:

import { getPokemonList, getPokemonListById } from "./lib/PokemonAPI";

// Fetching a list of Pokemon
async function fetchPokemonList() {
  try {
    const pokemonList = await getPokemonList();
    console.log("Pokemon List:", pokemonList);
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
  }
}

// Fetching details of a specific Pokemon
async function fetchPokemonDetails(pokemonName) {
  try {
    const pokemonDetails = await getPokemonListById(pokemonName);
    console.log("Pokemon Details:", pokemonDetails);
  } catch (error) {
    console.error(`Error fetching details for ${pokemonName}:`, error);
  }
}

// Example usage
fetchPokemonList();
fetchPokemonDetails("pikachu");
