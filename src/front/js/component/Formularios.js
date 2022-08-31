import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "styled-components";

const colores = {
	borde: "rgba(0, 0, 0, 0.06) ",
	error: "#CE1414",
	exito: "#1ed12d",
};

const Form = styled.form`
width: 450px;
min-height: 500px;
height: auto;
border-radius: 5px;
margin: 2% auto;
box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
padding: 2%;
background-image: linear-gradient(-225deg, #f5fbb4a7 50%, #8bb1a27d 50%);
`;

const GrupoInput = styled.div`
margin-bottom: 0;
border-bottom: 1px solid #efefef69;
position: relative;
background: transparent;
padding: 7px 0;
font-weight: light;
height: auto;
  

	&:hover {
	border-color: rgba(255, 255, 255, 0.752);
			}
`;
const Input = styled.input`
background: #fff;
border: 0;
width: 100%;
box-shadow: 0 0 0;
border-radius: 4px;
padding: 7px 0px 10px 9px;
font-weight: light;
font-size: 16px;
height: auto;
&: focus {
	border: 1px solid ${colores.borde};
	outline: none;
	box-shadow: 1px 0px 1px rgba(163, 163, 163, 0.4);
}
	${(props) =>
		props.valido === "true" &&
		css`
			border: 1px solid transparent;
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			border-bottom: 1px dotted ${colores.error} !important;
		`}
`;
const Error = styled.p`
	font-size: 14px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${(props) =>
		props.valido === "true" &&
		css`
			display: none;
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			display: block;
		`}
`;
const Validacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 15px;
	z-index: 100;
	font-size: 18px;
	opacity: 0;
	border-radius: 8px;
	${(props) =>
		props.valido === "true" &&
		css`
			opacity: 1;
			color: ${colores.exito};
		`}
	${(props) =>
		props.valido === "false" &&
		css`
			opacity: 1;
			color: ${colores.error};
		`}
`;
const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px) {
		grid-column: span 1;
	}
`;
const ContenedorBoton = styled.div`
	display:flex
    flex-direction:column;
    align-items:center;
    grid-column:span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;
const Boton = styled.button`
position: relative;
margin-top: 10px;
background: none;
border: solid 1px #121212;
border-radius: 3px;
transition: all 0.2s linear;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;

	&:hover{
		color: #fff;
		box-shadow: 2px 2px 3px #d1d1d1, -2px -2px 3px #ffffff;
 transform: translateY(-2px);
	}
	
`;


const MsjeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: ${colores.error};
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 1;
	p {
		margin: 0;
	}
	b {
		margin-left: 10px;
	}
`;
export {
	Form,
	GrupoInput,
	Input,
	Error,
	Validacion,
	ContenedorTerminos,
	ContenedorBoton,
	Boton,
	MsjeError,
};