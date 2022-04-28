import { Container } from "./style";

export default function Button({
  width,
  height,
  color,
  background,
  type,
  action,
  children,
  disabled,
}) {
  return (
    <Container
      onClick={action}
      type={type}
      color={color}
      width={width}
      height={height}
      background={background}
      disabled={disabled}
    >
      {children}
    </Container>
  );
}
