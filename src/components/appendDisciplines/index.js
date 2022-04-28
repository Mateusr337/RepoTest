import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";
import { useState } from "react";
import handleChange from "../../utils/handleChangeInput";
import Button from "../button";

export default function AppendDisciplines({ Form }) {
	const { auth } = useAuth();

	const [isLoading, setIsLoading] = useState(false);
	const [disciplineData, setDisciplineData] = useState({
		name: "",
		term: "",
	});

	function sendTest(e) {
		setIsLoading(true);
		e.preventDefault();
		validateInputs();

		api.insertDiscipline(disciplineData, auth)
			.then((response) => {
				setDisciplineData({
					term: "",
					name: "",
				});
			})
			.catch((error) => {
				toast.error("Discipline already exists");
			});
		setIsLoading(false);
	}

	function validateInputs() {
		if (disciplineData.term > 12 || disciplineData.term < 1) {
			toast.error("The term must be in the range 1 to 12!");
		}
	}

	return (
		<Form onSubmit={(e) => sendTest(e)}>
			<Input
				name="name"
				placeholder="Name of discipline"
				value={disciplineData.name}
				onChange={(e) => handleChange(e, disciplineData, setDisciplineData)}
				disabled={isLoading}
				required
			/>

			<Input
				name="term"
				placeholder="Term of discipline"
				value={disciplineData.term}
				onChange={(e) => handleChange(e, disciplineData, setDisciplineData)}
				disabled={isLoading}
				required
			/>

			<Button
				background={"#252526"}
				color={"#3f61d7"}
				width={"150px"}
				disabled={isLoading}
				type={"submit"}>
				{isLoading ? <ThreeDots color="#FFFFFF" height={15} width={40} /> : "Add"}
			</Button>

			<ToastContainer
				toastStyle={{ backgroundColor: "#252526", top: "100px" }}
				limit={1}
				dark={true}
				position={"top-center"}
			/>
		</Form>
	);
}
