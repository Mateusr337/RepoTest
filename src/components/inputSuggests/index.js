import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import Input from "../Input";
import { InputContainer, Suggest, Suggests } from "./style";

export default function InputSuggests({ inputText }) {
	const [suggests, setSuggests] = useState([]);
	const [text, setText] = useState("");

	const { auth } = useAuth();

	function search(e) {
		const searchData = {
			discipline: "",
			teacher: "",
		};
		setText(e.target.value);

		if (inputText === "discipline") searchData.discipline = e.target.value;
		if (inputText === "teacher") searchData.teacher = e.target.value;

		api.searchTests(auth, searchData.discipline, searchData.teacher)
			.then((response) => {
				setSuggests(response.data);
			})
			.catch((err) => console.log(err.message));
	}

	function updateViews(id, views) {
		const newViews = parseInt(views) + 1;
		api.putTestViews(newViews, id, auth);
		setText("");
		setSuggests([]);
	}

	return (
		<InputContainer>
			<Input
				placeholder={`Search by ${inputText}`}
				width={"400px"}
				onChange={(e) => search(e)}
				value={text}
			/>

			{suggests.length !== 0 && (
				<Suggests>
					{suggests.map((suggest, i) => {
						return (
							<Suggest
								href={suggest.pdfUrl}
								target="_blank"
								key={i}
								onClick={(e) => updateViews(suggest.id, suggest.views)}>
								{suggest.name} -{" "}
								{suggest.teacherDiscipline.discipline.name} -{" "}
								{suggest.teacherDiscipline.teacher.name} -{" "}
								{suggest.teacherDiscipline.discipline.term}° -{" "}
								{suggest.views} views
							</Suggest>
						);
					})}
				</Suggests>
			)}
		</InputContainer>
	);
}
