import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	gap: 25px;
	padding: 20px 50px;
	border-radius: 10px;
	background: #252526;

	display: flex;
	flex-direction: column;
`;

export const Topic = styled.div`
	color: #3f61d7;

	font-family: "Poppins";
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;

	display: flex;
	justify-content: space-between;

	cursor: pointer;
`;

export const TermContainer = styled.div`
	width: 100%;
	gap: 10px;

	display: flex;
	flex-direction: column;
`;
