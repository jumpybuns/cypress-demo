import { beforeEach } from "node:test";
import { fetchAllPokemon } from "../../../lib/fetch/allPokemon";

describe("Test pokemon api returns name and url", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it.only("shows a list of names and urls", async () => {
    // fetchMock.mockResponseOnce(JSON.fetchAllPokemon);
  });
});
