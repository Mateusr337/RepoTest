import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";
import { useRef, useState } from "react";
import handleChange from "../../utils/handleChangeInput";
import Button from "../button";
import errorsMessage from "../../utils/errorsMessage";
import { Form, IconContainer, InputContainer, Options, Text, Title } from "./styles";
import { BsArrowLeftCircle, BsArrowDownCircle } from "react-icons/bs";

export default function AppendTests() {
	const { auth } = useAuth();

	const [isLoading, setIsLoading] = useState(false);
	const [showOptions, setShowOptions] = useState(null);
	const [disciplinesList, setDisciplinesList] = useState([]);
	const [teachersList, setTeachersList] = useState([]);
	const [categoriesList, setCategoriesList] = useState([]);

	const fileInput = useRef();

	const [data, setData] = useState({
		name: "",
		category: "",
		teacher: "",
		discipline: "",
	});

	function sendTest(e) {
		e.preventDefault();
		setIsLoading(true);

		api.insertTests({ ...data, pdf: fileInput.current.files[0] }, auth)
			.then((response) => {
				toast.success("Success!");
				setData({
					name: "",
					category: "",
					teacher: "",
					discipline: "",
				});
				fileInput.current.value = null;
			})
			.catch((error) => {
				errorsMessage(error);
			});
		setIsLoading(false);
	}

	function getData(type) {
		if (type === "disciplines") getDisciplines();
		if (type === "teachers") getTeachers();
		if (type === "categories") getCategories();

		setShowOptions(type);
	}

	function getDisciplines() {
		api.getDisciplines(auth, "").then((response) => {
			setDisciplinesList(response.data);
		});
	}
	function getTeachers() {
		api.getTeachers(auth).then((response) => {
			setTeachersList(response.data);
		});
	}
	function getCategories() {
		api.getCategories(auth).then((response) => {
			setCategoriesList(response.data);
		});
	}

	function changeInputValue(inputName, value) {
		setData({ ...data, [inputName]: value });
		setShowOptions(null);
	}

	return (
		<Form onSubmit={(e) => sendTest(e)} enctype="multipart/form-data">
			<Title>Add a test</Title>
			<Input
				name="name"
				value={data.name}
				placeholder="Name of test"
				onChange={(e) => handleChange(e, data, setData)}
				disabled={isLoading}
				required
			/>

			<Input
				id="file"
				name="pdf"
				placeholder="PDF URL (ex: https:// ...)"
				disabled={isLoading}
				type={"file"}
				ref={fileInput}
				required
			/>

			<InputContainer>
				<Input
					autoComplete="off"
					onClick={() => getData("categories")}
					name="category"
					placeholder="Category (ex:p5 rec, P1, P2 ...)"
					value={data.category}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showOptions === "categories" ? (
						<BsArrowDownCircle onClick={() => setShowOptions(null)} />
					) : (
						<BsArrowLeftCircle />
					)}
				</IconContainer>

				{showOptions === "categories" && (
					<Options>
						{categoriesList.map((category, i) => (
							<Text
								key={i}
								onClick={() =>
									changeInputValue("category", category.name)
								}>
								{category.name.toLowerCase()}
							</Text>
						))}
					</Options>
				)}
			</InputContainer>

			<InputContainer>
				<Input
					onClick={() => getData("teachers")}
					autoComplete="off"
					name="teacher"
					placeholder="Teacher name"
					value={data.teacher}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showOptions === "teachers" ? (
						<BsArrowDownCircle onClick={() => setShowOptions(null)} />
					) : (
						<BsArrowLeftCircle />
					)}
				</IconContainer>

				{showOptions === "teachers" && (
					<Options>
						{teachersList.map((teacher, i) => (
							<Text
								key={i}
								onClick={() => changeInputValue("teacher", teacher.name)}>
								{teacher.name.toLowerCase()}
							</Text>
						))}
					</Options>
				)}
			</InputContainer>

			<InputContainer>
				<Input
					autoComplete="off"
					onClick={() => getData("disciplines")}
					name="discipline"
					placeholder="Discipline name"
					value={data.discipline}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showOptions === "disciplines" ? (
						<BsArrowDownCircle onClick={() => setShowOptions(null)} />
					) : (
						<BsArrowLeftCircle />
					)}
				</IconContainer>

				{showOptions === "disciplines" && (
					<Options>
						{disciplinesList.map((discipline, i) => (
							<Text
								key={i}
								onClick={() =>
									changeInputValue("discipline", discipline.name)
								}>
								{discipline.name.toLowerCase()}
							</Text>
						))}
					</Options>
				)}
			</InputContainer>

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
