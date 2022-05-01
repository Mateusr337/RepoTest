import { Container, Subtopic } from "./style";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import Files from "../file";

export default function Subtopics({ term, teacher }) {
	const { auth } = useAuth();

	const [list, setList] = useState([]);

	useEffect(() => {
		term &&
			api.getDisciplines(auth, term).then((response) => {
				setList(response.data.map((item) => item.name));
			});

		teacher &&
			api.getTests(auth, null, null, teacher).then((response) => {
				const categoriesThisTeacher = [];

				response.data.map((test) => {
					if (!categoriesThisTeacher.includes(test.category.name))
						categoriesThisTeacher.push(test.category.name);
				});

				setList(categoriesThisTeacher);
			});
	}, []);

	return (
		<Container>
			{list.length === 0 && (
				<Subtopic color="#000000">
					"There is still no evidence registered here!"
				</Subtopic>
			)}

			{list.length !== 0 &&
				list.map((item, i) => (
					<div key={i}>
						<Subtopic>
							<BsArrowReturnRight />
							<span>{item}</span>
						</Subtopic>

						{term && <Files discipline={item} />}
						{teacher && <Files category={item} />}
					</div>
				))}
		</Container>
	);
}
