import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import * as api from "../../services/api";
import Input from "../Input";
import { InputContainer, Suggests } from "./style";

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
						if (inputText === "discipline")
							return (
								<div key={i}>
									{suggest.name} -{" "}
									{suggest.teacherDiscipline.discipline.name} -{" "}
									{suggest.teacherDiscipline.discipline.term}° -{" "}
									{suggest.teacherDiscipline.teacher.name}
								</div>
							);

						if (inputText === "teacher")
							return (
								<div key={i}>
									{suggest.name} -{" "}
									{suggest.teacherDiscipline.teacher.name} -{" "}
									{suggest.category.name} -{" "}
									{suggest.teacherDiscipline.discipline.name}
								</div>
							);
					})}
				</Suggests>
			)}
		</InputContainer>
	);
}
