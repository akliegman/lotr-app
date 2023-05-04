export type Route = {
  path: string;
  name: string;
  component: React.ReactNode;
};

export enum RouteKeys {
  Home = "Home",
  Characters = "Characters",
  Character = "Character",
  Quotes = "Quotes",
  Quote = "Quote",
  Movies = "Movies",
  Movie = "Movie",
  NotFound = "NotFound",
}
