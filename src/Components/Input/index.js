import { Container, InputCustom } from "./styles";

export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Container>
      <InputCustom
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
