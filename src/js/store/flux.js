const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			cards: [],
			detailPlanets: []
		},
		actions: {
			fecthStarWars: async(element, page=1, limit=10) => {
				let baseURL = `https://www.swapi.tech/api/${element}?page=${page}&limit${limit}`
				try {
					let response = await fetch(baseURL)
					if(!response.ok) return response.status
					let data = await response.json()
					let objData = {}
					objData[element] = data.results
					setStore(objData)
				} catch (error) {
					console.error(error)
				}
			},
			getDetails: async(url, element) => {
				try {
					let response = await fetch(url)
					if(!response.ok) return response.status
					let data = await response.json()
					switch (element) {
						case 'planets':
							let store = getStore();
							let newDetailsPlanets = [...store.detailPlanets, {
								uid: data.result.uid,
								name: data.result.properties.name, 
								climate: data.result.properties.climate,
								population: data.result.properties.population,
								orbital_period: data.result.properties.orbital_period,
								rotation_period: data.result.properties.rotation_period,
								diameter: data.result.properties.diameter
							}]
							console.log("newDetailsPlanets: " + newDetailsPlanets)
							//reset the global store
							setStore({ detailPlanets: newDetailsPlanets });
							break;
						case 'people':
						case 'vehicles':
							console.log('Mangoes and papayas are $2.79 a pound.');
							// Expected output: "Mangoes and papayas are $2.79 a pound."
							break;
						default:
							console.log(`Sorry, we are out of ${element}.`);
					}
				} catch (error) {
					console.error(error)
				}
			},
			getElementByID: async(id) => {
				let baseURL = `https://www.swapi.tech/api/${element}/${id}`
				try {
					let response = await fetch(baseURL)
					if(!response.ok) return response.status
					let data = await response.json()
					let objData = {}
					objData[element] = data.results
					setStore(objData)
				} catch (error) {
					console.error(error)
				}
			},
			addToFavorites: (id, name, element) => {
				let store = getStore();
				let newFavorites = [...store.favorites, {id: (id + "-" + element), name: name}]

				//reset the global store
				setStore({ favorites: newFavorites });
			},
			removeFromFavorites: (id, element) => {
				console.log("ID: " + id + "-" + element)
				let newFavorites = [...getStore().favorites]
				let getIndex = newFavorites.findIndex(favorite => favorite.id === (id + "-" + element))
				console.log("getIndex: " + getIndex)
				newFavorites.splice(getIndex, 1)
				//reset the global store
				//setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
