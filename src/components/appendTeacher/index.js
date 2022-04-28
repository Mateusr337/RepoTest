import * as api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import Input from "../Input";
import { useState } from "react";
import handleChange from "../../utils/handleChangeInput";
import Button from "../button";

export default function AppendTeachers({ Form }) {
	const { auth } = useAuth();

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		name: "",
	});

	function send(e) {
		setIsLoading(true);
		e.preventDefault();

		api.insertTeacher(data, auth)
			.then((response) => {
				setData({
					name: "",
				});
			})
			.catch((error) => {
				toast.error("Teacher already exists");
			});
		setIsLoading(false);
	}

	return (
		<Form onSubmit={(e) => send(e)}>
			<Input
				name="name"
				placeholder="Name of teacher"
				value={data.name}
				onChange={(e) => handleChange(e, data, setData)}
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
