import * as S from "./Input.styles"
import camelCase from "utils/camelCase";

const Input = ({ className, name, value, setValue }) => {
  return (
    <S.Input className={className}>
      <input
        type="text"
        id={camelCase(name)}
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={camelCase(name)}>{name}</label>
    </S.Input>
  );
};

export default Input;
