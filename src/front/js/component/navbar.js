import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid m-0 p-0 ">
      <nav className="navbar shadow p-3 mb-5 bg-body rounded bg-opacity-10">
        <div className="container d-flex">
        <Link to="/" className="nav-link active text-white " href="/home">
                Home
              </Link>

          <ul className="navbar-nav">

            {store.currentUser === null ? (
              <Link to="/register" className="nav-link active text-white " href="/register">
                Registrate
              </Link>
            ) : (
              <Link to="/profile" className="nav-link active text-white " href="/profile">
                Perfil
              </Link>
            )}
            <li>
              {store.currentUser === null ? (
                <Link to="/login" className="nav-link active text-white" href="/login">
                  Ingresa
                </Link>
              ) : (
                <Link to="/" className="nav-link active text-white" onClick={() => actions.getlogout()}>
                  Cerrar sesion
                </Link>
              )}
            </li>

          </ul>

        </div>
      </nav>
    </div>
  );
};
