import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";
import { routes } from "../../../routes/routes";
import { ReactComponent as Castle } from "../../../assets/castle.svg";
import { ReactComponent as Ring } from "../../../assets/ring.svg";
import { ReactComponent as Ogre } from "../../../assets/ogre.svg";
import { ReactComponent as Quote } from "../../../assets/quote.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";
import { ReactComponent as Close } from "../../../assets/close.svg";

export const Nav: React.FC = () => {
  const navLinkClasses: (props: { isActive: boolean }) => string = ({
    isActive,
  }) => [styles.NavLink, isActive && styles.Active].join(" ");

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={styles.Container}>
      <button className={styles.Toggle} onClick={toggleNav}>
        {isNavOpen ? <Close /> : <Menu />}
      </button>
      <nav className={[styles.Nav, isNavOpen && styles.NavOpen].join(" ")}>
        <NavLink
          to={routes.Home.path}
          onClick={closeNav}
          className={navLinkClasses}
        >
          <Castle className={styles.Icon} />
          <span className={styles.Label}>Home</span>
        </NavLink>
        <NavLink
          to={routes.Movies.path}
          onClick={closeNav}
          className={navLinkClasses}
        >
          <Ring className={styles.Icon} />
          <span className={styles.Label}>Movies</span>
        </NavLink>
        <NavLink
          to={routes.Characters.path}
          onClick={closeNav}
          className={navLinkClasses}
        >
          <Ogre className={styles.Icon} />
          <span className={styles.Label}>Characters</span>
        </NavLink>
        <NavLink
          to={routes.Quotes.path}
          onClick={closeNav}
          className={navLinkClasses}
        >
          <Quote className={styles.Icon} />
          <span className={styles.Label}>Quotes</span>
        </NavLink>
      </nav>
    </div>
  );
};
