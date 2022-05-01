import styled from "styled-components";

export const InputContainer = styled.div`
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;

	position: relative;
`;

export const Suggests = styled.div`
	width: 100%;
	max-height: 120px;

	font-size: 16px;
	font-weight: 500;
	font-family: "Poppins";

	justify-content: center;
	background: lightgrey;
	padding: 55px 8px 15px 8px;
	gap: 10px;
	border-radius: 0px 0px 5px 5px;
	border-top: 1px solid #000000;

	display: flex;
	flex-direction: column;
	overflow-y: scroll;

	position: absolute;
	top: 50px;
	left: 0;
`;

export const Suggest = styled.a`
	text-decoration: none;
	color: #000000;
	font-size: 14px;

	&:hover {
		cursor: pointer;
		color: #3f61d7;
	}
`;
