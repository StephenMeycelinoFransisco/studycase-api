const POKEAPI_BASE_URL = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL;

export async function getPokemonList() {
  const response = await fetch(`${POKEAPI_BASE_URL}pokemon?limit=151&offset=0`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonListById(name: string) {
  const response = await fetch(`${POKEAPI_BASE_URL}pokemon/${name}`);
  const data = await response.json();
  return data;
}
