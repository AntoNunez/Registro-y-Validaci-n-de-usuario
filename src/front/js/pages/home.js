import React from "react";
import FlowerImageUrl from "../../img/flower.jpg";

export const Home = () => {

	return (
		<div className="container">
			<div className="card text m-3">
				<img src={FlowerImageUrl} className="rounded" />
				<div className="card-img-overlay">
					<h5 className="card-title text-white mt-5">Registrate</h5>
					<p className="card-text text-white">Esta pagina se realizo con el fin de probar la autenticación de usuarios.</p>
					<p className="card-text text-white">Prueba ingresando tus datos</p>
				</div>
			</div>
			
		</div>

	);
};
