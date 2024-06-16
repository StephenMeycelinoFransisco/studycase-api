# Pokemon App
This project is a Pokemon application that fetches data from the PokeAPI and displays information about different Pokemon.

## Fetching Data from PokeAPI
This project fetches Pokemon data from the PokeAPI (https://pokeapi.co/). Here's how it's implemented:

## API Utility Functions
The utility functions getPokemonList and getPokemonListById are used to fetch Pokemon data from the PokeAPI.

- getPokemonList: Fetches a list of Pokemon from the PokeAPI.

- getPokemonListById(name: string): Fetches details of a specific Pokemon by its name from the PokeAPI.

## Setup Instructions
Before running the application, you need to create a new file named `.env` with the same contents as the `.env.example` file provided. This file will store your environment variables needed for the application to run properly.

### Steps to Create .env File
1. Locate the `.env.example` file in the root directory of the project.
2. Create a new file in the same directory and name it `.env`.
3. Copy all the contents from `.env.example` to the newly created `.env` file.
4. Make sure to fill in any necessary values in the `.env` file as required by the application.

Once you have created the `.env` file and filled in the necessary values, you can proceed with running the application.

