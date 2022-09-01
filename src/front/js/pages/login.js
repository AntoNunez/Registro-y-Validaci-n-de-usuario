import React from "react";
import Login from "../component/login";


export const Page_login = () => {

  return (
    <>
      <Login
        titulo="Ingresa"
        lg_remember="Recuerdame."
        text_preg2="No tienes cuenta?"
        boton_newAccount="/register "
        text_linkNew="crear cuenta."
      />
    </>
  );
};