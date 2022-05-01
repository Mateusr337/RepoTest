import styled from "styled-components";

const Input = styled.input`
	width: ${(props) => props.width || "100%"};
	height: 55px;

	background: lightgrey;
	color: #111;
	border-radius: 6px;
	padding-left: 12px;
	border: none;
	align-self: ${(props) => props.align};

	font-size: 16px;
	font-weight: 500;
	font-family: "Poppins";

	&::placeholder {
		color: #363636;
		font-family: "Poppins";
	}

	&:disabled {
		background: #f2f2f2;
	}
`;

export default Input;
