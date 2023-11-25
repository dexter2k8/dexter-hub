import Styles from "./styles";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IInputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  control?: T extends FieldValues ? Control<T> : never;
  name: string;
  label?: string;
  password?: boolean;
}
const Input: React.FC<IInputProps<T>> = ({ control, name, label, password, ...inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Styles.Container>
          {!password ? (
            <>
              <label htmlFor="input">{label}</label>
              <input
                id="input"
                onChange={onChange}
                value={value}
                style={{ borderRadius: "0.25rem" }}
                {...inputProps}
              />
            </>
          ) : (
            <>
              <label htmlFor="password">{label}</label>
              <Styles.PasswordBox>
                <input
                  id="password"
                  onChange={onChange}
                  value={value}
                  type={showPassword ? "text" : "password"}
                  {...inputProps}
                />
                <span onClick={handleChange}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
              </Styles.PasswordBox>
            </>
          )}
          {error && (
            <small style={{ color: "var(--negative)" }}>
              <AiOutlineExclamationCircle /> {error?.message}
            </small>
          )}
        </Styles.Container>
      )}
    />
  );
};

export default Input;
