import { Container } from "./style";

export default function ButtonGithub({ disabled }) {
  return (
    <Container
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`}
    >
      Sign-in with GITHUB
    </Container>
  );
}
