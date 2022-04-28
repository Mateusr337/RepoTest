import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Buttons, Container, Main, Form, Title } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import AppendDisciplines from "../../components/appendDisciplines";
import AppendTeachers from "../../components/appendTeacher";
import AppendCategory from "../../components/appendCategory";

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
						<Title>Add a discipline</Title>
						<AppendDisciplines Form={Form} />

						<Title>Add a Teachers</Title>
						<AppendTeachers Form={Form} />

						<Title>Add a Category</Title>
						<AppendCategory Form={Form} />
					</>
				)}
			</Main>
		</Container>
	);
}
