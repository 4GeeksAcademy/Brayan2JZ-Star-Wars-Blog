const getState = ({ getStore, getActions, setStore }) => {
	const API_URL="https://swapi.dev/api/"
	return {
		store: {
			characters: [],
			planets:[],
			vehicles:[],
			favorites:[],
		
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
			getChar: () => {
				fetch(API_URL+"people")
				.then(resp => {
					console.log("Response:", resp);
					return resp.json();
				})
				.then(data =>{
					console.log("Result:", data);
					setStore({ characters: data.results});
				})
				.catch(error => console.log(error));
			},
			getPLan: () => {
				fetch(API_URL+"planets")
				.then(resp => resp.json())
				.then(data => setStore({
					planets: data.results
				}))
				.catch(error => console.log(error));
			},
			getVehicles: () => {
				fetch(API_URL+"vehicles")
				.then(resp => resp.json())
				.then(data => setStore({
					vehicles: data.results
				}))
				.catch(error => console.log(error));
			},
			addFavorites: (favItem) => {
				setStore({
					favorites: [...getStore().favorites, favItem]
				})
			},
			deleteFavorites: (index) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i)=> i !== index);
				setStore({
					favorites: newFavorites
				})
			},
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
