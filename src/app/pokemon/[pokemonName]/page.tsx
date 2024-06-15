"use client";

import React, { useEffect, useState } from "react";
import PokemonImage from "@/components/pokemon/PokemonImage";
import PokemonStats from "../PokemonStats";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPokemonListById } from "@/lib/PokemonAPI";
import { motion } from "framer-motion";

export default function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  // Get Pokemon Data dari params
  const { pokemonName } = params;
  const [pokemonObject, setPokemonObject] = useState<any>(null);

  // Fetch Pokemon Data berdasarkan ID / Nama
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonListById(pokemonName);
        setPokemonObject(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pokemonName]);

  // Menghandle Loading data
  if (!pokemonObject) {
    return (
      <div className="text-center py-4 flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="custom-loader"
        ></motion.div>
      </div>
    );
  }

  return (
    <section className="mt-24 flex items-center justify-center">
      <Card>
        <CardHeader>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl lg:text-3xl font-bold"
          >
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </motion.h1>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="m-auto relative w-[160px] h-[160px] md:w-[240px] md:h-[240px]"
          >
            <PokemonImage
              image={
                pokemonObject.sprites.other["official-artwork"].front_default
              }
              name={pokemonObject.name}
            />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <b>Weight</b>: {pokemonObject.weight}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PokemonStats stats={pokemonObject.stats} />
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}
