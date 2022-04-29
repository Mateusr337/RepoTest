import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import { Container, Text } from "./style";

export default function Files({ discipline, category }) {
	const { auth } = useAuth();

	const [list, setList] = useState([]);

	useEffect(() => {
		api.getTests(auth, discipline, category).then((response) => {
			setList(response.data);
		});
	}, []);

	return (
		<Container>
			{list.map((item, i) => {
				let infoShow;
				if (discipline) infoShow = item.teacherDiscipline.discipline.name;

				return (
					<Text key={i} href={item.pdfUrl}>
						{item.name} - {`${infoShow}`} - {item.category.name}
					</Text>
				);
			})}
		</Container>
	);
}
