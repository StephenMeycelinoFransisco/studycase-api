"use client";

import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PokemonCard from "./PokemonCard";
import { motion } from "framer-motion";
import PokemonGridPagination from "./PokemonGridPagination"; // Sesuaikan dengan lokasi file

import "./PokemonGrid.css";

interface PokemonGridProps {
  pokemonList: any;
}

const PokemonGrid = ({ pokemonList }: PokemonGridProps) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Jumlah item per halaman

  // Membuat API Call dengan delay waktu 2 Detik
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  // Menggunakan Filter Data Pokemon
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  // Menghitung indeks mulai dan akhir data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemonList = filteredPokemonList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber: number) => {
    // Memastikan pageNumber tidak kurang dari 1
    const newPage = Math.max(1, pageNumber);
    // Memastikan pageNumber tidak lebih dari jumlah halaman yang tersedia
    setCurrentPage(
      Math.min(newPage, Math.ceil(filteredPokemonList.length / itemsPerPage))
    );
  };

  return (
    <>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl py-6 text-center font-bold"
        >
          Search For Your Pokemon
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid w-full max-w-sm items-center gap-1.5 mx-auto"
        >
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl lg:text-3xl mb-2 font-bold mt-4"
        >
          Pokemon Collection
        </motion.h3>
      </div>

      {/* Menghandle Loading State */}
      {isLoading ? (
        <div className="text-center py-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="custom-loader"
          ></motion.div>
        </div>
      ) : (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Melakukan Mapping terhadap data pokemon */}
            {currentPokemonList.map((pokemon: any) => (
              <motion.div
                key={pokemon.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <PokemonCard name={pokemon.name} key={pokemon.name} />
              </motion.div>
            ))}
          </motion.div>

          {/* Menampilkan Pagination menggunakan Shadcn UI */}
          <PokemonGridPagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredPokemonList.length}
            onPageChange={paginate}
          />
        </>
      )}
    </>
  );
};

export default PokemonGrid;
