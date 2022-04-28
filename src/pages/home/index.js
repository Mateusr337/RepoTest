import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main, Form, Title } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import AppendTests from "../../components/appendTests";

export default function HomePage() {
	const [screen, setScreen] = useState("disciplines");

	return (
		<Container>
			<Header />

			<Buttons>
				<Button width={"150px"} action={() => setScreen("disciplines")}>
					Disciplines
				</Button>

				<Button width={"150px"} action={() => setScreen("teachers")}>
					Teacher
				</Button>

				<Button width={"150px"} action={() => setScreen("append")}>
					Append
				</Button>
			</Buttons>

			<Main>
				{screen === "append" && (
					<>
						<Title>Add a test</Title>
						<AppendTests Form={Form} />
					</>
				)}
			</Main>
		</Container>
	);
}
