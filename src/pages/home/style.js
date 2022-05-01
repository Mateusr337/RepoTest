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

export const Text = styled.div`
	font-family: "Poppins";
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;
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
