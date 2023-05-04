import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { moviesActions } from "../../../store/slice/movies/moviesSlice";
import { charactersActions } from "../../../store/slice/characters/charactersSlice";
import { quotesActions } from "../../../store/slice/quotes/quotesSlice";
import App from "./App";

import { mockData } from "../../../setupTests";

jest.mock("../../../hooks/useAppDispatch");
jest.mock("../../../hooks/useAppSelector");
jest.mock("../../../store/slice/movies/moviesSlice");
jest.mock("../../../store/slice/characters/charactersSlice");
jest.mock("../../../store/slice/quotes/quotesSlice");

const mockStore = configureMockStore([]);

describe("App", () => {
  let store: ReturnType<typeof mockStore>;

  beforeAll(() => {
    Object.defineProperty(window, "scrollTo", {
      value: jest.fn(),
      writable: true,
    });
  });
  beforeEach(() => {
    store = mockStore(mockData);
    (useAppDispatch as jest.Mock).mockReturnValue(store.dispatch);
    (moviesActions.getAll as any).mockReturnValue({
      type: "movies/getAll",
      payload: mockData.movies,
    });

    (charactersActions.getAll as any).mockReturnValue({
      type: "characters/getAll",
      payload: mockData.characters,
    });
    (quotesActions.getAll as any).mockReturnValue({
      type: "quotes/getAll",
      payload: mockData.quotes,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders App", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Welcome to the API Explorer/i)
      ).toBeInTheDocument();
    });
  });

  test("renders App with MoviesPage", async () => {
    (useAppSelector as jest.Mock).mockReturnValue(mockData.movies);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movies"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/5cd95395de30eff6ebccde56/i)).toBeInTheDocument(); // id from mock data
    });
  });
});
