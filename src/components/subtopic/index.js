import { Container, Subtopic } from "./style";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import Files from "../file";

export default function Subtopics({ children, term, teacher }) {
	const { auth } = useAuth();

	const [list, setList] = useState([]);

	useEffect(() => {
		term && api.getDisciplines(auth, term).then((response) => setList(response.data));
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
							<span>{item.name}</span>
						</Subtopic>

						{term && <Files discipline={item.name} />}
						{teacher && <Files category={item.name} />}
					</div>
				))}
		</Container>
	);
}
