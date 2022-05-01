import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import { Container, Text } from "./style";

export default function Files({ discipline, category }) {
	const { auth } = useAuth();

	const [list, setList] = useState([]);
	const [render, setRender] = useState(0);

	useEffect(() => {
		api.getTests(auth, discipline, category).then((response) => {
			response.data.sort((a, b) => (a.views < b.views ? 1 : -1));
			setList(response.data);
		});
	}, [render]);

	function putViews(item) {
		const viewPut = parseInt(item.views) + 1;

		api.putTestViews(viewPut, item.id, auth).then((response) => {
			setRender(render + 1);
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
						onClick={() => putViews(item)}>
						{item.name} ( {`${infoShow}`} / {item.category.name} / views:{" "}
						{item.views} )
					</Text>
				);
			})}
		</Container>
	);
}
