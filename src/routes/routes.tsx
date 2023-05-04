import { CharacterPage } from "../pages/CharacterPage/CharacterPage";
import { CharactersPage } from "../pages/CharactersPage/CharactersPage";
import { Error404Page } from "../pages/Error404Page/Error404Page";
import { HomePage } from "../pages/HomePage/HomePage";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { QuotePage } from "../pages/QuotePage/QuotePage";
import { QuotesPage } from "../pages/QuotesPage/QuotesPage";

import type { Route, RouteKeys } from "./routes.type";

export const routes: Record<RouteKeys, Route> = {
  Home: {
    path: "/",
    name: "Home",
    component: <HomePage />,
  },
  Characters: {
    path: "/characters",
    name: "Characters",
    component: <CharactersPage />,
  },
  Character: {
    path: "/characters/:id",
    name: "Character",
    component: <CharacterPage />,
  },
  Quotes: {
    path: "/quotes",
    name: "Quotes",
    component: <QuotesPage />,
  },
  Quote: {
    path: "/quotes/:id",
    name: "Quote",
    component: <QuotePage />,
  },
  Movies: {
    path: "/movies",
    name: "Movies",
    component: <MoviesPage />,
  },
  Movie: {
    path: "/movies/:id",
    name: "Movie",
    component: <MoviePage />,
  },
  NotFound: {
    path: "*",
    name: "Not Found",
    component: <Error404Page />,
  },
};
