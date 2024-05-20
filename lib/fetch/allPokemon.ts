export async function fetchAllPokemon(): Promise<any> {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const list = await res.json();
  console.log("BEFORE LOG:", list.results);
  return list.results;
}
