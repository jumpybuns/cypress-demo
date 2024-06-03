"use client";

import { fetchAllPokemon } from "../../../lib/fetch/allPokemon";
import { useState } from "react";
import styles from "../../styles/Cards.module.css";

type AllPokemon = {
  name: string;
  url: string;
};

export default function Cards() {
  const [data, setData] = useState<AllPokemon[]>([]); // Create a state variable to store the array of pokemon

  const handleClick = async () => {
    const data = await fetchAllPokemon(); // Call the fetchAllPokemon function to get the array of pokemon
    setData(data);
  };

  const cards = data.map((pokemon: AllPokemon) => {
    return (
      <li className={styles.card} key={pokemon.name}>
        <div className={styles.dataWrapper}>
          <a href={pokemon.url}>{pokemon.name}</a>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div className='btn-wrapper'>
        <button type='submit' onClick={handleClick}>
          Get Cards
        </button>
      </div>
      <ul className={styles.cardContainer}>{cards}</ul>
    </div>
  );
}
