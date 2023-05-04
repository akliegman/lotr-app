import "@testing-library/jest-dom";

import type { RootState } from "./store/store.type";

export const mockData: RootState = {
  characters: {
    data: [
      {
        _id: "5cd99d4bde30eff6ebccfbf7",
        height: "",
        race: "Human",
        gender: "Male",
        birth: "TA 1391",
        spouse: "Unnamed wife",
        death: "TA 1589",
        realm: "Arthedain",
        hair: "",
        name: "Araphor",
        wikiUrl: "http://lotr.wikia.com//wiki/Araphor",
      },
      {
        _id: "5cd99d4bde30eff6ebccfbed",
        height: "",
        race: "Human",
        gender: "Male",
        birth: "TA 2084",
        spouse: "Unnamed wife",
        death: "TA 2247",
        realm: "",
        hair: "",
        name: "Aranuir",
        wikiUrl: "http://lotr.wikia.com//wiki/Aranuir",
      },
    ],
    pagination: {
      total: 2,
      page: 1,
      pages: 1,
      limit: 20,
    },
    loading: false,
    errors: undefined,
  },
  movies: {
    data: [
      {
        _id: "5cd95395de30eff6ebccde56",
        name: "The Lord of the Rings Series",
        runtimeInMinutes: 558,
        budgetInMillions: 281,
        boxOfficeRevenueInMillions: 2917,
        academyAwardNominations: 30,
        academyAwardWins: 17,
        rottenTomatoesScore: 94,
      },
      {
        _id: "5cd95395de30eff6ebccde58",
        name: "The Unexpected Journey",
        runtimeInMinutes: 169,
        budgetInMillions: 200,
        boxOfficeRevenueInMillions: 1021,
        academyAwardNominations: 3,
        academyAwardWins: 1,
        rottenTomatoesScore: 64,
      },
    ],
    pagination: {
      total: 2,
      page: 1,
      pages: 1,
      limit: 20,
    },
    loading: false,
    errors: undefined,
  },
  quotes: {
    data: [
      {
        _id: "5cd96e05de30eff6ebcce7ec",
        dialog: "Give us that! Deagol my love",
        movie: "5cd95395de30eff6ebccde5d",
        character: "5cd99d4bde30eff6ebccfe9e",
        id: "5cd96e05de30eff6ebcce7ec",
      },
      {
        _id: "5cd96e05de30eff6ebcce7f6",
        dialog: "Gandalf?",
        movie: "5cd95395de30eff6ebccde5d",
        character: "5cd99d4bde30eff6ebccfc15",
        id: "5cd96e05de30eff6ebcce7f6",
      },
    ],
    pagination: {
      total: 2,
      page: 1,
      pages: 1,
      limit: 20,
    },
    loading: false,
    errors: undefined,
  },
};
