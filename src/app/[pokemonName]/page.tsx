import PokemonImage from "@/components/pokemon/PokemonImage";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getPokemonListById } from "@/lib/PokemonAPI";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemonListById(pokemonName);

  return (
    <section className="mt-24 flex items-center justify-center">
      <Card>
        <CardHeader>
          <h1 className="text-xl lg:text-3xl font-bold">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </h1>
        </CardHeader>
        <CardContent>
          <div className="m-auto relative w-[160px] h-[160px] md:w-[240px] md:h-[240px]">
            <PokemonImage
              image={
                pokemonObject.sprites.other["official-artwork"].front_default
              }
              name={pokemonObject.name}
            />
          </div>
          <h3>
            <b>Weight</b>: {pokemonObject.weight}
          </h3>
          <div className="flex-col">
            {pokemonObject.stats.map((statObject: any) => {
              const statName = statObject.stat.name;
              const statValue = statObject.base_stat;
              return (
                <div
                  className="flex items-stretch w-[200px] md:w-[360px] lg:w-[500px]"
                  key={statName}
                >
                  <h3 className="py-3 w-2/4 text-sm md:text-base">
                    <b>{statName}</b>: {statValue}
                  </h3>
                  <Progress className="w-2/4 m-auto" value={statValue} />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
