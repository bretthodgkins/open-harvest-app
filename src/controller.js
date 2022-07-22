export const setDeviceState = async (alias, state) => {
	const response = await fetch('http://localhost:5000/switch', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ alias, state }),
	});
	return response.json();
};

export const getDeviceState = async (alias) => {
	const response = await fetch('http://localhost:5000/switch', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ alias }),
	});
	return response.json();
};

export const getSensorData = () => {
	return fetch('http://localhost:5000/sensors', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response)
		.then((data) => {
			return data.json();
		})
		.catch((error) => {
			//   console.log("server is down!!")
		});
};

export const setSensorData = (key, value) => {
	return fetch('http://localhost:5000/sensors', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ key, value }),
	})
		.then((response) => response)
		.then((data) => {
			return data.json();
		})
		.catch((error) => {
			//   console.log("server is down!!")
		});
};
