import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const config = (token) => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

export function register(data) {
	const { email, password } = data;

	const promise = api.post("/register", { email, password });
	return promise;
}

export function login(data) {
	const { email, password } = data;
	const promise = api.post(`/login`, { email, password });
	return promise;
}

export function validateAuth(data) {
	const promise = api.get("/validateAuth", config(data));
	return promise;
}

export function insertTest(data, token) {
	const newData = new FormData();

	for (let info in data) {
		newData.append(`${info}`, data[info]);
	}
	console.log(newData);
	const promise = api.post("/tests", newData, {
		headers: {
			"content-Type": "multipart/form-data",
		},
	});
	return promise;
}

export function getTests(token) {
	const promise = api.get("/tests", config(token));
	return promise;
}

export function getTeachers(token) {
	const promise = api.get("/teachers", config(token));
	return promise;
}

export function GithubCallback(code, access_token) {
	const promise = api.get(`/github/callback?code=${code}&access_token=${access_token}`);
	return promise;
}

export function GithubCallbackSuccess(access_token) {
	const promise = api.get(`/success?access_token=${access_token}`);
	return promise;
}

export function LoginWithGithub(email) {
	const promise = api.post("/login/github", { email });
	return promise;
}

export function searchDisciplines(name, token) {
	const promise = api.get(`/disciplines/${name}`, config(token));
	return promise;
}

export function searchTeachers(name, token) {
	const promise = api.get(`/teachers/${name}`, config(token));
	return promise;
}

export function insertDiscipline(data, token) {
	const promise = api.post("/disciplines", data, config(token));
	return promise;
}

export function insertTeacher(data, token) {
	const promise = api.post("/teachers", data, config(token));
	return promise;
}

export function insertCategory(data, token) {
	const promise = api.post("/categories", data, config(token));
	return promise;
}
