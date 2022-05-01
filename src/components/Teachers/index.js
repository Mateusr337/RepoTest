import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, TermContainer, Topic } from "../disciplines/style";
import * as api from "../../services/api";
import Subtopics from "../subtopic";
import { BsArrowLeftCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import InputSuggests from "../inputSuggests";

export default function Teachers() {
	const { auth } = useAuth();

	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		api.getTeachers(auth).then((response) => {
			setTeachers(response.data);
		});
	}, []);

	function changeActiveTeacher(teacherActivated) {
		let list = [];
		teachers.map((teacher) => {
			teacher.id === teacherActivated
				? list.push({ ...teacher, active: true })
				: list.push({ ...teacher, active: false });
		});
		setTeachers(list);
	}

	return (
		<>
			<InputSuggests inputText={"teacher"} />

			<Container>
				{teachers.map(({ name, id, active }) => (
					<TermContainer key={name}>
						<Topic
							onClick={() =>
								active ? changeActiveTeacher() : changeActiveTeacher(id)
							}>
							<span>{name}</span>
							{active ? (
								<BsArrowDownCircleFill />
							) : (
								<BsArrowLeftCircleFill />
							)}
						</Topic>

						{active && <Subtopics teacher={name} />}
					</TermContainer>
				))}
			</Container>
		</>
	);
}
