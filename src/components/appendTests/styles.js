import styled from "styled-components";

export const InputContainer = styled.div`
	gap: 2px;

	display: flex;
	flex-direction: column;

	position: relative;
`;

export const IconContainer = styled.div`
	height: 55px;

	align-items: center;
	color: #363636;

	display: flex;
	position: absolute;
	right: 18px;
	top: 0;

	cursor: pointer;
`;

export const Options = styled.div`
	padding: 5px 0px;
	background: lightgrey;
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

export const Form = styled.form`
	width: 100%;

	gap: 15px;

	display: flex;
	flex-direction: column;

	button {
		align-self: flex-end;
	}

	input[type="file"] {
		display: flex;
		flex-direction: column;

		color: #363636;
	}
`;

export const Title = styled.div`
	padding: 5px 20px;
	color: #3f61d7;

	font-family: "Poppins";
	font-weight: 700;
	font-size: 26px;
	line-height: 24px;
`;
