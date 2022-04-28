import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	background: #363636;
	gap: 20px;
	padding: 100px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Buttons = styled.div`
	width: 100%;
	height: 30px;

	gap: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Main = styled.div`
	width: 80%;
	min-height: 40px;

	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	width: 100%;

	gap: 15px;

	display: flex;
	flex-direction: column;

	button {
		align-self: flex-end;
	}

	input {
		height: 45px;
	}
`;

export const Title = styled.div`
	padding: 5px 20px;
	color: #3f61d7;

	font-family: "Poppins";
	font-weight: 700;
	font-size: 22px;
	line-height: 24px;
`;
