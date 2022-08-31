import Swal from "sweetalert2";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://3001-4geeksacade-reactflaskh-e1g0ykv366d.ws-us63.gitpod.io",
			currentUser: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getLogin: async (info = { email: '', password: '' }) => {
				try {
					const { apiUrl } = getStore();
					const response = await fetch(`${apiUrl}/api/login`, {
						method: 'POST',
						body: JSON.stringify(info),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					const data = await response.json()

					if (data.access_token) {
						setStore({ currentUser: data })
						sessionStorage.setItem('currentUser', JSON.stringify(data));
					}

					return data;

				} catch (error) {
					console.log("there has been an error login in");
				}
			},
			register: async (username, email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: username.campo, email: email.campo, password: password.campo
					}),
				};

				try {

					const resp = await fetch(
						"https://3001-4geeksacade-reactflaskh-e1g0ykv366d.ws-us63.gitpod.io/api/user",
						
						opts
					)
					if (resp.status !== 200 && resp.status !== 201) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Debe haber algun error!",
							footer: "Por favor, intente nuevamente!",
						  });
						return false;
					}

					const data = await resp.json();
					console.log("esto viene del backend", data);
					return true;
				}
				catch (error) {
					console.log("there has been an error register in")
				}
			},
			///register: async (info = { username: '', email: '', password: '' }) => {
			//	try {
			//		const { apiUrl } = getStore();
			//		const response = await fetch(`${apiUrl}/api/user`, {
			//			method: 'POST',
			//			body: JSON.stringify(info),
			//			headers: {
			//				'Content-Type': 'application/json'
			////			}
			//		})


			//		const data = await response.json();
			//		console.log("esto viene del backend", data);
			//		return true;
			//	}
			//	catch (error) {
			//		console.log("there has been an error register in")
			//	}
			//},

			getlogout: () => {

				if (sessionStorage.getItem('currentUser')) {
					sessionStorage.removeItem('currentUser');
					setStore({ currentUser: null });
				}
			},

			checkSession: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({ currentUser: JSON.parse(sessionStorage.getItem('currentUser')) })
				}
			},

			getMessage: () => {
				const store = getStore()
				const opts = {
					headers: {
						"Authorization": "Bearer" + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
