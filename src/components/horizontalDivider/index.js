import { Container, Line, Text } from "./style";

export default function HorizontalDivider({ text, background, color }) {
  return (
    <Container>
      <Line background={background}></Line>
      <Text color={color}>{text}</Text>
      <Line background={background}></Line>
    </Container>
  );
}
