const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
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
			}
		}
	};
};

export default getState;
