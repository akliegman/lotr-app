import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { moviesActions } from "../../../store/slice/movies/moviesSlice";
import { charactersActions } from "../../../store/slice/characters/charactersSlice";
import { quotesActions } from "../../../store/slice/quotes/quotesSlice";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../../ui/Header/Header";
import { Nav } from "../../ui/Nav/Nav";
import { Main } from "../Main/Main";
import { routes } from "../../../routes/routes";
import { Errors } from "../Errors/Errors";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(moviesActions.getAll());
    dispatch(charactersActions.getAll());
    dispatch(quotesActions.getAll());
  }, [dispatch]);

  return (
    <div className={styles.Container}>
      <Sidebar>
        <Header />
        <Nav />
      </Sidebar>
      <Main>
        <Routes>
          {Object.values(routes).map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Main>
      <Errors />
    </div>
  );
};

export default App;
