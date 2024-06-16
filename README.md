# Pokemon App
This project is a Pokemon application that fetches data from the PokeAPI and displays information about different Pokemon.

## Tech Stack
This project uses the following technologies:

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Framer Motion**: A library for animations and gestures in React applications.
- **Lucide React**: A library of open-source icons for React.
- **usehooks-ts**: A collection of useful React hooks.
- **Husky**: A tool for managing Git hooks.
- **Lint-staged**: A tool to run linters on staged Git files.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Sharp**: A high-performance image processing library.

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