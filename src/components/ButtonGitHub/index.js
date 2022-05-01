import { Container } from "./style";
import { AiOutlineGithub } from "react-icons/ai";

export default function ButtonGithub({ disabled }) {
	return (
		<Container
			href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`}>
			<span>Sign-in with GITHUB</span> <AiOutlineGithub size={20} />
		</Container>
	);
}
