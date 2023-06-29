import { Container, ButtonCustom } from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <Container>
      <ButtonCustom onClick={onClick}>{label}</ButtonCustom>
    </Container>
  );
};

export default Button;
