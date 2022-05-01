import styled from "styled-components";

export const InputContainer = styled.div`
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;

	position: relative;
`;

export const Suggests = styled.div`
	width: 100%;

	font-size: 16px;
	font-weight: 500;
	font-family: "Poppins";

	justify-content: center;
	background: lightgrey;
	padding: 5px 8px;
	gap: 10px;
	border-radius: 0px 0px 5px 5px;
	border-top: 1px solid #000000;

	display: flex;
	flex-direction: column;

	position: absolute;
	top: 50px;
	left: 0;
`;
