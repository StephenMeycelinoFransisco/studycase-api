import PokemonGrid from "@/components/pokemon/PokemonGrid";
import { getPokemonList } from "@/lib/PokemonAPI";

export default async function PokemonPage() {
  const PokemonList = await getPokemonList();

  return (
    <main>
      <PokemonGrid pokemonList={PokemonList} />
    </main>
  );
}
