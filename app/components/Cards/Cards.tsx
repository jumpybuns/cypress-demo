import { fetchAllPokemon } from "../../../lib/fetch/allPokemon";
import styles from "../../styles/Cards.module.css";

type AllPokemon = {
  name: string;
  url: string;
};

export default async function Cards() {
  const data = await fetchAllPokemon(); // Call the fetchAllPokemon function to get the array of pokemon

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
      <ul className={styles.cardContainer}>{cards}</ul>
    </div>
  );
}
