import styled from "styled-components";

export const InputContainer = styled.div`
	gap: 2px;

	display: flex;
	flex-direction: column;

	position: relative;
`;

export const IconContainer = styled.div`
	height: 45px;

	align-items: center;
	color: #363636;

	display: flex;
	position: absolute;
	right: 5px;
	top: 0;

	cursor: pointer;
`;

export const Options = styled.div`
	padding: 5px 0px;
	background: #ffffff;
	border-radius: 5px;

	display: flex;
	flex-direction: column;
`;

export const Text = styled.span`
	padding: 5px 15px;
	font-size: 16px;
	font-weight: 500;
	font-family: "Poppins";

	&:hover {
		cursor: pointer;
		background: lightgray;
	}
`;
