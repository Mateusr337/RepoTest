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

	function putViews(id, currentView) {
		const viewPut = parseInt(currentView) + 1;

		api.putTestViews(viewPut, id, auth).then((response) => {
			console.log(viewPut, "funcionou");
		});
	}

	return (
		<Container>
			{list.map((item, i) => {
				let infoShow;
				if (discipline) infoShow = item.teacherDiscipline.teacher.name;
				if (category) infoShow = item.teacherDiscipline.discipline.name;

				return (
					<Text
						key={i}
						target="_blank"
						href={item.pdfUrl}
						onClick={() => putViews(item.id, item.views)}>
						{item.name} ( {`${infoShow}`} / {item.category.name} / views:{" "}
						{item.views} )
					</Text>
				);
			})}
		</Container>
	);
}
