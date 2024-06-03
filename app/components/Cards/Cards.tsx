"use client";

import { fetchAllPokemon } from "../../../lib/fetch/allPokemon";
import { useState } from "react";
import styles from "../../styles/Cards.module.css";

type AllPokemon = {
  name: string;
  url: string;
};

export default function Cards() {
  const [allPokemon, setAllPokemon] = useState<AllPokemon[]>([]);
  const [showCards, setShowCards] = useState(false);

  const handleClick = async () => {
    if (allPokemon.length > 0 && showCards === true) return setAllPokemon([]);
    const data = await fetchAllPokemon(); // Call the fetchAllPokemon function to get the array of pokemon
    setAllPokemon(data);
    setShowCards(true);
  };

  const cards = allPokemon.map((pokemon: AllPokemon) => {
    return (
      <li className={styles.card} key={pokemon.name} data-test='card'>
        <div className={styles.dataWrapper}>
          <a href={pokemon.url}>{pokemon.name}</a>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.container} data-test-id='card-container'>
      <div className={styles.btnWrapper} data-test-id='card-btn'>
        <button type='submit' onClick={handleClick}>
          <span>Get Cards</span>
        </button>
      </div>
      <ul className={styles.cardContainer} data-test="cards">{cards}</ul>
    </div>
  );
}
