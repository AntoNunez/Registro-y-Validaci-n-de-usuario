import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/login.css";



const Login = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actions.getLogin(data);
    console.log(response);
    if (response.access_token) {
      Swal.fire({
        title: "Bienvenido",
        text: "Inicio de Sesion Exitosa!",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/profile");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email/Password incorrecto!",
        footer: "Por favor intente nuevamente!",
      });
    }
  };

  return (
    <div className="container-md">

      <form onSubmit={handleSubmit} id="login-form" className="text-left">
        <div className="login text-center">
          <div className="titulo">{props.titulo}</div>
          <p>Ingresa tu correo y contraseña</p>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={data.email}
            className="form-control"
            placeholder="Correo electronico"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={data.password}
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
          />
        </div>
        <div className="etc-login-form mt-3">
          <input
            type="checkbox"
            className="box me-2"
            id="lg_remember"
            name="lg_remember"
          />
          <label form="lg_remember">{props.lg_remember}</label>
          <p className="mt-2">
            {props.text_preg2}{" "}
            <a href={props.boton_newAccount}>{props.text_linkNew}</a>
          </p>
        </div>
        <div className="boton">
        <button onClick={handleSubmit} type="submit" className="login-button">
          Ingresar
        </button>
        </div>
      </form>
    </div>
  );
};
Login.propTypes = {
  titulo: PropTypes.string,
  lg_remember: PropTypes.string,
  text_preg2: PropTypes.string,
  boton_newAccount: PropTypes.string,
  text_linkNew: PropTypes.string,
};
export default Login;