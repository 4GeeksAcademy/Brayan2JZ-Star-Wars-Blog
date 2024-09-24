const getState = ({ getStore, getActions, setStore }) => {
	const API_URL="https://swapi.dev/api/"

	const saveToLocalStorage = (key, data) => {
		localStorage.setItem(key, JSON.stringify(data));
	};

	const getFromLocalStorage = (key) => {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : [];
	};

	const fetchDataIfNeeded = (category, apiEndPoint, localStorageKey) => {
		const store = getStore();
		if (Array.isArray(store[category]) && store[category].length === 0) {
			fetch(API_URL + apiEndPoint)
				.then(resp => resp.json())
				.then(data => {
					setStore({ [category]: data.results });
					saveToLocalStorage(localStorageKey, data.results)
				})
				.catch(error => console.log(`Error Fetching ${category}: ` + error));
		}
	}

	return {
		store: {
			characters: getFromLocalStorage("characters"),
			planets:getFromLocalStorage("planets"),
			vehicles:getFromLocalStorage("vehicles"),
			favorites:getFromLocalStorage("favorites"),
		},
		
		actions: {
			getChar: () => fetchDataIfNeeded("characters", "people", "characters"), 
			getPLan: () => fetchDataIfNeeded("planets", "planets", "planets"),
			getVehicles: () => fetchDataIfNeeded("vehicles", "vehicles", "vehicles"),
			addFavorites: (favItem) => {
				const newFavorites = [...getStore().favorites, favItem]
				setStore({favorites: newFavorites})
				saveToLocalStorage("favorites", newFavorites);
			},
			deleteFavorites: (index) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i)=> i !== index);
				setStore({
					favorites: newFavorites
				})
				saveToLocalStorage("favorites", newFavorites);
			},
			
		}
	};
};

export default getState;
