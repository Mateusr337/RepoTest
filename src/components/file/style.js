import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled.a`
	padding: 0px 30px;

	font-family: "Poppins";
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-decoration: none;
	color: #000000;

	&:hover {
		cursor: pointer;
		color: #252526;
	}
`;
