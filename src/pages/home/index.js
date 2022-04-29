import { useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import AppendTests from "../../components/appendTests";
import Disciplines from "../../components/disciplines";

export default function HomePage() {
	const [screen, setScreen] = useState(<Disciplines />);

	return (
		<Container>
			<Header />

			<Buttons>
				<Button width={"150px"} action={() => setScreen(<Disciplines />)}>
					Disciplines
				</Button>

				<Button width={"150px"} action={() => setScreen("Teachers")}>
					Teacher
				</Button>

				<Button width={"150px"} action={() => setScreen(<AppendTests />)}>
					Append
				</Button>
			</Buttons>

			<Main>{screen}</Main>
		</Container>
	);
}
