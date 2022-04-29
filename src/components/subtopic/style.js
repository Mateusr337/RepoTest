import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	border-radius: 10px;
	background: #363636;

	display: flex;
	flex-direction: column;
`;

export const Subtopic = styled.div`
	padding: 5px 15px;
	gap: 8px;

	color: ${(props) => (props.color ? props.color : "#3f61d7")};
	font-family: "Poppins";
	font-weight: 600;
	font-size: 18px;
	line-height: 24px;

	display: flex;
	align-items: center;
`;
