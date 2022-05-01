import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	background: #363636;
	padding-top: 65px;
	gap: 100px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.span`
	font-family: "Poppins";
	font-weight: 500;
	font-size: 30px;
	line-height: 24px;

	letter-spacing: 0.15px;

	color: #3f61d7;
	align-self: center;
`;

export const Form = styled.form`
	width: 464px;

	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InputContainer = styled.div`
	position: relative;
`;

export const IconInput = styled.div`
	width: 17px;
	height: 15px;

	position: absolute;

	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;

	cursor: pointer;
`;
