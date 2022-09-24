const server = 'http://raspberrypi.local:5000';
// const server = 'http://localhost:5000';

export const setDeviceState = async (alias, state) => {
	const response = await fetch(`${server}/switch`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ alias, state }),
	});
	return response.json();
};

export const getDeviceState = async (alias) => {
	const response = await fetch(`${server}/switch`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ alias }),
	});
	return response.json();
};

export const setPumpState = async (pump, state) => {
	const response = await fetch(`${server}/pumps/${pump}?state=${state}`, {
		method: 'PUT',
	});
	return response.json();
};

export const getPumpState = async (alias) => {
	const response = await fetch(`${server}/pumps`, {
		method: 'GET',
	});
	return response.json();
};

export const getSensorData = () => {
	return fetch(`${server}/sensors`, {
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
	return fetch(`${server}/sensors`, {
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
