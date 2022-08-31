import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Login from "../component/login";


export const Page_login = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Login
        titulo="Ingresa"
        lg_remember="Recuerdame."
        text_preg2="No tienes cuenta?"
        boton_newAccount="/register "
        text_linkNew="crear cuenta"
      />
    </>
  );
};