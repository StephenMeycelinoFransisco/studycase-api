"use client";

import { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PokemonCard from "./PokemonCard";
import "./PokemonGrid.css";

interface PokemonGridProps {
  pokemonList: any;
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center font-bold">
          Search For Your Pokemon
        </h3>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-2xl lg:text-3xl mb-2 font-bold mt-4">
          Pokemon Collection
        </h3>
      </div>

      {isLoading ? (
        <div className="text-center py-4 flex items-center justify-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPokemonList.map((pokemon: any) => (
            <PokemonCard name={pokemon.name} key={pokemon.name} />
          ))}
        </div>
      )}
    </>
  );
}
