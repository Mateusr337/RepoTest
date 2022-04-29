import { useEffect, useState } from "react";
import { Container, TermContainer, Topic } from "./style";
import * as api from "../../services/api";
import { BsArrowLeftCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import Subtopics from "../subtopic";
import InputSuggests from "../inputSuggests";

export default function Disciplines() {
	const TermsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const [terms, setTerms] = useState([]);
	const { auth } = useAuth();

	useEffect(() => {
		changeActiveTerm();
	}, []);

	function changeActiveTerm(termActivated) {
		let list = [];
		TermsNumbers.map((term) => {
			term === termActivated
				? list.push({ term, active: true })
				: list.push({ term, active: false });
		});
		setTerms(list);
	}

	return (
		<>
			<InputSuggests inputText={"discipline"} />

			<Container>
				{" "}
				{terms.map(({ term, active }) => (
					<TermContainer key={term}>
						<Topic onClick={() => changeActiveTerm(term)}>
							<span>{term}° term</span>
							{active ? (
								<BsArrowDownCircleFill />
							) : (
								<BsArrowLeftCircleFill />
							)}
						</Topic>

						{active && <Subtopics term={term} />}
					</TermContainer>
				))}
			</Container>
		</>
	);
}
