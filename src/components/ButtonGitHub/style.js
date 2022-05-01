import styled from "styled-components";

export const Container = styled.a`
	width: 100%;

	background: #000000;
	${(props) => props.disabled && "opacity: 0.5;"}
	color: #FFFFFF;
	border-radius: 4px;

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6px 16px;
	gap: 10px;

	font-family: "Roboto";
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	text-decoration: none;

	cursor: pointer;
`;
