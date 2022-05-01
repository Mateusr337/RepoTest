import { useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main, Text } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import AppendTests from "../../components/appendTests";
import Disciplines from "../../components/disciplines";
import Teachers from "../../components/Teachers";
import { RiStarSmileFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { SiHellofresh } from "react-icons/si";

export default function HomePage() {
	const inicialScreen = (
		<Text>
			<SiHellofresh id="helloIcon" size={60} />
			Hello! thank you for accessing our app, <AiTwotoneLike />
			<br /> <br />
			Start to improve your knowledge by accessing the "disciplines" or "teachers"
			sessions, or contribute with a test in "insert",
			<br /> <br />
			good studies! <RiStarSmileFill />
			<br />
			<div> - Mateus Rossetto</div>
		</Text>
	);

	const [screen, setScreen] = useState(inicialScreen);

	return (
		<Container>
			<Header />

			<Buttons>
				<Button width={"150px"} action={() => setScreen(<Disciplines />)}>
					Disciplines
				</Button>

				<Button width={"150px"} action={() => setScreen(<Teachers />)}>
					Teachers
				</Button>

				<Button width={"150px"} action={() => setScreen(<AppendTests />)}>
					Insert
				</Button>
			</Buttons>

			<Main>{screen}</Main>
		</Container>
	);
}
