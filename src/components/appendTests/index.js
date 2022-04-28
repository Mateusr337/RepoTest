import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";
import { useState } from "react";
import handleChange from "../../utils/handleChangeInput";
import Button from "../button";
import errorsMessage from "../../utils/errorsMessage";
import { IconContainer, InputContainer, Options, Text } from "./styles";
import { BsArrowLeftCircle, BsArrowDownCircle } from "react-icons/bs";

export default function AppendTests({ Form }) {
	const { auth } = useAuth();

	const [isLoading, setIsLoading] = useState(false);

	const [showDisciplines, setShowDisciplines] = useState(false);
	const [disciplinesList, setDisciplinesList] = useState([]);

	const [showTeachers, setShowTeachers] = useState(false);
	const [teachersList, setTeachersList] = useState([]);

	const [showCategories, setShowCategories] = useState(false);
	const [categoriesList, setCategoriesList] = useState([]);

	const [data, setData] = useState({
		name: "",
		pdf: "",
		category: "",
		teacher: "",
		discipline: "",
	});

	function handleChangeFiles(e) {
		setData({ ...data, [e.target.name]: e.target.files });
	}

	function sendTest(e) {
		e.preventDefault();
		setIsLoading(true);

		api.insertTests({ ...data, pdf: data.pdf[0] }, auth)
			.then((response) => {
				toast.success("Success!");
				setData({
					name: "",
					pdf: "",
					category: "",
					teacher: "",
					discipline: "",
				});
			})
			.catch((error) => {
				errorsMessage(error);
			});
		setIsLoading(false);
	}

	function getDisciplines() {
		api.getDisciplines(auth).then((response) => {
			setDisciplinesList(response.data);
			setShowDisciplines(true);
		});
	}

	function getTeachers() {
		api.getTeachers(auth).then((response) => {
			setTeachersList(response.data);
			setShowTeachers(true);
		});
	}

	function getCategories() {
		api.getCategories(auth).then((response) => {
			setCategoriesList(response.data);
			setShowCategories(true);
		});
	}

	function changeInputValue(inputName, value, setShow) {
		setData({ ...data, [inputName]: value });
		setShow(false);
	}

	return (
		<Form onSubmit={(e) => sendTest(e)} enctype="multipart/form-data">
			<Input
				name="name"
				placeholder="Name of test"
				value={data.name}
				onChange={(e) => handleChange(e, data, setData)}
				disabled={isLoading}
			/>

			<Input
				name="pdf"
				placeholder="PDF URL (ex: https:// ...)"
				onChange={(e) => handleChangeFiles(e)}
				disabled={isLoading}
				type={"file"}
				required
			/>

			<InputContainer>
				<Input
					name="category"
					placeholder="Category (ex:p5 rec, P1, P2 ...)"
					value={data.category}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showCategories ? (
						<BsArrowDownCircle onClick={() => setShowCategories(false)} />
					) : (
						<BsArrowLeftCircle onClick={getCategories} />
					)}
				</IconContainer>

				{showCategories && (
					<Options>
						{categoriesList.map((category, i) => (
							<Text
								key={i}
								onClick={() =>
									changeInputValue(
										"category",
										category.name,
										setShowCategories
									)
								}>
								{category.name.toUpperCase()}
							</Text>
						))}
					</Options>
				)}
			</InputContainer>

			<InputContainer>
				<Input
					name="teacher"
					placeholder="Teacher name"
					value={data.teacher}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showTeachers ? (
						<BsArrowDownCircle onClick={() => setShowTeachers(false)} />
					) : (
						<BsArrowLeftCircle onClick={getTeachers} />
					)}
				</IconContainer>

				{showTeachers && (
					<Options>
						{teachersList.map((teacher, i) => (
							<Text
								key={i}
								onClick={() =>
									changeInputValue(
										"teacher",
										teacher.name,
										setShowTeachers
									)
								}>
								{teacher.name.toUpperCase()}
							</Text>
						))}
					</Options>
				)}
			</InputContainer>

			<InputContainer>
				<Input
					name="discipline"
					placeholder="Discipline name"
					value={data.discipline}
					onChange={(e) => handleChange(e, data, setData)}
					disabled={isLoading}
				/>

				<IconContainer>
					{showDisciplines ? (
						<BsArrowDownCircle onClick={() => setShowDisciplines(false)} />
					) : (
						<BsArrowLeftCircle onClick={getDisciplines} />
					)}
				</IconContainer>

				{showDisciplines && (
					<Options>
						{disciplinesList.map((discipline, i) => (
							<Text
								key={i}
								onClick={() =>
									changeInputValue(
										"discipline",
										discipline.name,
										setShowDisciplines
									)
								}>
								{discipline.name.toUpperCase()}
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
