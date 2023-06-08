import React from "react";
import { useCallback, useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../../style/layout/header.css";
const Home = React.lazy(() => import("../Home"));
const Productos = React.lazy(() => import("../products/ListProducts"));
const Adopcion = React.lazy(() => import("../adopt/ListAdopt"));
const Perdidos = React.lazy(() => import("../lost/ListLost"));
const Contacto = React.lazy(() => import("../misc/Contact"));
const Cart = React.lazy(() => import("../products/Cart"));
const DetailProduct = React.lazy(() => import("../products/DetailProduct"));

const Header = () => {
  const [color, setColor] = useState(false);
  const [stateMenu, changeStateMenu] = useState(false);

  // Scroll nav
  const [scrollNavY, setScrollNavY] = useState(null);
  useEffect(() => {
    // run on scroll
    const updateScrollY = () => {
      const scrollY = window.pageYOffset;
      setScrollNavY(scrollY);
    };
    window.addEventListener("scroll", updateScrollY); // listener run on scroll
    return () => {
      window.removeEventListener("scroll", updateScrollY); // clean up (2)
    };
  });

  // Pop up - UseEffect
  const [pop, setPop] = useState(false);

  const showPopUp = useCallback(() => {
    setPop(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPop(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [pop]);

  return (
    <div className={`App ${color ? "dark-mode" : "light-mode"}`.trimEnd()}>
      <header className="App-header">
        {/* Menu */}
        <div className="container-navigation">
          <div className="menu">
            <div
              className={`hamburguer-menu ${
                stateMenu ? "active-menu" : ""
              }`.trimEnd()}
              onClick={() => changeStateMenu(!stateMenu)}
            >
              <div className="icon">
                <span />
              </div>
            </div>
            <div className="navigation-background">&nbsp;</div>
            <nav
              className={`navigation-nav ${
                scrollNavY < 100 ? "" : "change-nav"
              }`.trimEnd()}
            >
              <ul>
                <li>
                  <NavLink onClick={() => changeStateMenu(!stateMenu)} to="/">
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => changeStateMenu(!stateMenu)}
                    to="/productos"
                  >
                    Productos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => changeStateMenu(!stateMenu)}
                    to="/adopcion"
                  >
                    Adopción
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => changeStateMenu(!stateMenu)}
                    to="/perdidos"
                  >
                    Se busca
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => changeStateMenu(!stateMenu)}
                    to="/contacto"
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* Cart */}
            <Cart />
            {/* dark-mode */}
            <div className="container-mode">
              <div className="toggle">
                <input
                  type="checkbox"
                  id="toggle-switch"
                  className="changeColor"
                  onClick={() => {
                    setColor(!color);
                    showPopUp();
                  }}
                />

                <label htmlFor="toggle-switch">
                  <span className={`${color ? "none-icon" : ""}`.trimEnd()}>
                    🐕
                  </span>
                  <span className={`${color ? "" : "none-icon"}`.trimEnd()}>
                    🐈
                  </span>
                </label>
              </div>
            </div>
            {/* POP-UP */}
            <div className={`pop-up ${pop ? "" : "none-pop"}`.trimEnd()}>
              <h2>
                <span>¡</span>
                {color ? "Miau" : "Guau"}
                <span>!</span>
              </h2>
            </div>
            {/*  */}
          </div>
        </div>
      </header>
      {/* Links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        {/* route with name (validate name and id) */}
        {/* or :id */}
        <Route path="/productos/:slug" element={<DetailProduct />} />
        <Route path="/adopcion" element={<Adopcion />} />
        <Route path="/perdidos" element={<Perdidos />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Return Home (*) */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Header;
