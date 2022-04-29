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

export function getTests(token, discipline, category) {
	const promise = api.get(
		`/tests?category=${category}&discipline=${discipline}`,
		config(token)
	);
	return promise;
}

export function getTeachers(token) {
	const promise = api.get("/teachers", config(token));
	return promise;
}

export function getCategories(token) {
	const promise = api.get("/categories", config(token));
	return promise;
}

export function getDisciplines(token, term) {
	const promise = api.get(`/disciplines?term=${term}`, config(token));
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

export function searchTeachers(name, token) {
	const promise = api.get(`/teachers/${name}`, config(token));
	return promise;
}

export function searchTests(token, discipline, teacher) {
	console.log(discipline, teacher);
	const promise = api.get(
		`/tests/?search=yes&teacher=${teacher}&discipline=${discipline}`,
		config(token)
	);
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

export function insertTests(data, token) {
	const formData = new FormData();

	for (let key in data) {
		formData.append(key, data[key]);
	}

	const promise = api.post("/tests", formData, config(token));
	return promise;
}
