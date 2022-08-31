import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
//import "../../styles/estilos.css"

import {
	Form,
	ContenedorTerminos,
	ContenedorBoton,
	Boton,
	MsjeError,
} from "../component/Formularios";
import Input from "../component/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


export const Page_register = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [username, cambiarUsername] = useState({ campo: "", valido: null });
	const [email, cambiarEmail] = useState({ campo: "", valido: null });
	const [password, cambiarPassword] = useState({ campo: "", valido: null });
	const [confirm, cambiarConfirm] = useState({ campo: "", valido: null });
	const [terms, cambiarTerms] = useState(false);
	const [Form_valido, cambiarForm_valido] = useState(null);



	const expresiones = {
		username: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^.{4,12}$/, // 4 a 12 digitos.
		confirm: /^.{4,12}$/, // 4 a 12 digitos.
	};

	const validarPassword = () => {
		if (password.campo.length > 0) {
			if (password.campo !== confirm.campo) {
				cambiarConfirm((prevState) => {
					return { ...prevState, valido: "false" };
				});
			} else {
				cambiarConfirm((prevState) => {
					return { ...prevState, valido: "true" };
				});
			}
		}
	};

	const onChangeTerms = (e) => {
		cambiarTerms(e.target.checked);

	};
	const handleClick = () => {
		actions.register(username, email, password);

	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (
			username.valido === "true" &&
			email.valido === "true" &&
			password.valido === "true" &&
			confirm.valido === "true" &&
			terms
		) {
			cambiarForm_valido(true);
			cambiarUsername({ campo: "", valido: "" });
			cambiarEmail({ campo: "", valido: "" });
			cambiarPassword({ campo: "", valido: "" });
			cambiarConfirm({ campo: "", valido: "" });
		
				Swal.fire({
					title: "Muchas Gracias",
					text: "Registro Exitoso!"
					
				})		
			navigate("/login")
		} else {
			cambiarForm_valido(false);

		}

	};

	return (
		<div className="container-fluid Container_reg ">
			<main>
				<Form className="Form" action="" onSubmit={(onSubmit)}>
					<div className="register text-center mb-0">
						<div className="titulo">Registro</div>
						<p>Por favor ingresa tus datos</p>
					</div>
					<Input
						estado={username}
						cambiarEstado={cambiarUsername}
						tipo="text"
						id="name"
						placeholder="Nombre completo"
						MsjeError="ingresa nombre y apellido"
						expresionRegular={expresiones.username}
					/>
					<Input
						estado={email}
						cambiarEstado={cambiarEmail}
						tipo="text"
						id="email"
						placeholder="Correo electronico"
						MsjeError="ingresa formato valido"
						expresionRegular={expresiones.email}
					/>
					<Input
						estado={password}
						cambiarEstado={cambiarPassword}
						tipo="password"
						id="password"
						placeholder="Contraseña"
						MsjeError="min 4 maximo 12 digitos"
						expresionRegular={expresiones.password}
					/>
					<Input
						estado={confirm}
						cambiarEstado={cambiarConfirm}
						tipo="password"
						id="confirm_password"
						placeholder="Confirmar contraseña"
						MsjeError="Ambas contraseñas deben ser iguales"
						funcion={validarPassword}
					/>
					<ContenedorTerminos>
						<input
							type="checkbox"
							className="box"
							id="terminos"
							name="terminos"
							checked={terms}
							onChange={onChangeTerms}
						/>
						<label form="reg_agree">
							Acepto los <a href="/Terminos">terminos</a>
						</label>
						<p>
							Tienes una cuenta? <a href="/login">Ingresa aqui</a>
						</p>
					</ContenedorTerminos>
					{Form_valido === false && (
						<MsjeError>
							<p>
								<FontAwesomeIcon icon={faExclamationTriangle} />
								<b>Error:</b> Completa los datos
								correctamente.
							</p>
						</MsjeError>
					)}

					<ContenedorBoton>
						<Boton onClick={handleClick} type="submit" className="reg-button">
							Registrar
						</Boton>
					</ContenedorBoton>
				</Form>
			</main>

		</div>
	);
};