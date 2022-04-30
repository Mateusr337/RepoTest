import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";
import { githubError } from "../signIn";

export default function GithubPage() {
	const navigate = useNavigate();
	const { login } = useAuth();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");

		api.GithubCallback(code).then((response) => {
			api.GithubCallbackSuccess(response.data.access_token).then((response) => {
				const email = response.data.userData[0]?.email;
				if (!email) return error();

				api.LoginWithGithub(email)

					.then((response) => {
						login(response.data.token);
						navigate("/home");
					})

					.catch((error) => {
						error();
					});
			});
		});
	}, []);

	function error() {
		navigate("/");
	}

	return (
		<>
			<ToastContainer
				toastStyle={{ backgroundColor: "#252526", top: "100px" }}
				limit={1}
				dark={true}
				position={"top-center"}
			/>
		</>
	);
}
