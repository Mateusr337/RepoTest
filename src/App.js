import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import "./styles/reset.css";
import "./styles/style.css";
import { AuthProvider } from "./contexts/AuthContext";
import GithubPage from "./pages/githubPage";
import HomePage from "./pages/home";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/github/callback" element={<GithubPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
