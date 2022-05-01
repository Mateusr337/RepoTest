import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	background: #363636;
	gap: 20px;
	padding: 100px 0px 60px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Text = styled.div`
	border: solid 2px #3d5ed7;
	border-radius: 10px;
	padding: 30px;
	margin-top: 40px;

	text-align: center;
	font-family: "Poppins";
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;
	position: relative;

	#helloIcon {
		position: absolute;
		left: 10px;
		bottom: 10px;
	}

	div {
		align-self: flex-end;
		font-size: 14px;
		line-height: 14px;

		position: absolute;
		bottom: 5px;
		right: 10px;
	}
`;

export const Buttons = styled.div`
	width: 100%;
	height: 30px;

	gap: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Main = styled.div`
	width: 80%;
	min-height: 40px;

	padding: 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
