import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import Input from "../Input";
import { InputContainer, Suggest, Suggests } from "./style";

export default function InputSuggests({ inputText }) {
	const [suggests, setSuggests] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { auth } = useAuth();

	function search(e) {
		if (e.target.value === "") return setSuggests([]);

		const searchData = {
			discipline: "",
			teacher: "",
		};

		if (inputText === "discipline") searchData.discipline = e.target.value;
		if (inputText === "teacher") searchData.teacher = e.target.value;

		api.searchTests(auth, searchData.discipline, searchData.teacher)
			.then((response) => {
				setSuggests(response.data);
			})
			.catch((err) => console.log(err.message));
	}

	function updateViews(id) {
		api.putTestViews(id);
	}

	return (
		<InputContainer>
			<Input
				placeholder={`Search by ${inputText}`}
				width={"400px"}
				onChange={(e) => search(e)}
				disabled={isLoading}
			/>

			{suggests.length !== 0 && (
				<Suggests>
					{suggests.map((suggest, i) => {
						return (
							<Suggest
								href={suggest.pdfUrl}
								target="_blank"
								key={i}
								onClick={() => updateViews(suggest.id)}>
								{suggest.name} -{" "}
								{suggest.teacherDiscipline.discipline.name} -{" "}
								{suggest.teacherDiscipline.discipline.term}° -{" "}
								{suggest.teacherDiscipline.teacher.name} -{" "}
								{suggest.category.name}
							</Suggest>
						);
					})}
				</Suggests>
			)}
		</InputContainer>
	);
}
