const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			cards: [],
			detailPlanets: [],
			detailPeople: [],
			detailVehicles: [],
			planets: []
		},
		actions: {
			fecthStarWars: async(element, page=1, limit=10) => {
				let baseURL = `https://www.swapi.tech/api/${element}?page=${page}&limit${limit}`
				try {
					let response = await fetch(baseURL)
					if(!response.ok) return response.status
					let data = await response.json()
					let objData = {}
					objData[element] = data[element=="films"? "result" : "results"].map(item => ({
						...item,
						img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters" : element}/${item.uid}.jpg`
					}))
					setStore(objData)
				} catch (error) {
					console.error(error)
				}
			},
			getDetails: async(id, element) => {
				try {
					let baseURL = `https://www.swapi.tech/api/${element}/${id}`
					let response = await fetch(baseURL)
					if(!response.ok) return response.status
					let data = await response.json()
					let store = getStore();
					switch (element) {
						case 'planets':
							let newDetailsPlanets = [...store.detailPlanets, {
								uid: data.result.uid,
								name: data.result.properties.name,
								description: data.result.description,
								climate: data.result.properties.climate,
								population: data.result.properties.population,
								orbital_period: data.result.properties.orbital_period,
								rotation_period: data.result.properties.rotation_period,
								diameter: data.result.properties.diameter,
								img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters" : element}/${data.result.uid}.jpg`
							}]
						
							//reset the global store
							setStore({ detailPlanets: newDetailsPlanets });
							
							break;
						case 'people':
							let newDetailsPeople = [...store.detailPeople, {
								uid: data.result.uid,
								name: data.result.properties.name,
								description: data.result.description,
								height: data.result.properties.height,
								mass: data.result.properties.mass,
								hair_color: data.result.properties.hair_color,
								skin_color: data.result.properties.skin_color,
								birth_year: data.result.properties.birth_year,
								gender: data.result.properties.gender,
								eye_color: data.result.properties.eye_color,
								img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters" : element}/${data.result.uid}.jpg`
							}]
						
							//reset the global store
							setStore({ detailPeople: newDetailsPeople });
							
							break;
						case 'vehicles':
							let newDetailsVehicles = [...store.detailVehicles, {
								uid: data.result.uid,
								name: data.result.properties.name,
								description: data.result.description,
								model: data.result.properties.model,
								vehicle_class: data.result.properties.vehicle_class,
								manufacturer: data.result.properties.manufacturer,
								cost_in_credits: data.result.properties.cost_in_credits,
								crew: data.result.properties.crew,
								passengers: data.result.properties.passengers,
								max_atmosphering_speed: data.result.properties.max_atmosphering_speed,
								cargo_capacity: data.result.properties.cargo_capacity,
								consumables: data.result.properties.consumables,
								length: data.result.properties.length,
								img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters" : element}/${data.result.uid}.jpg`
							}]
						
							//reset the global store
							setStore({ detailVehicles: newDetailsVehicles });
							
							break;
						default:
							console.log(`Sorry, we are out of ${element}.`);
					}
				} catch (error) {
					console.error(error)
				}
			},
			addToFavorites: (id, name, element) => {
				let store = getStore();
				let newFavorites = []
				if(store.favorites.some(el => el.id === id)){
					newFavorites = [...getStore().favorites]
					let getIndex = newFavorites.findIndex(favorite => favorite.id === id)
					newFavorites.splice(getIndex, 1)
				} else {
					newFavorites = [...store.favorites, {id: (id), name: name, element: element}]
				}
				//reset the global store
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
