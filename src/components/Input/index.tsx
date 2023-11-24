import Styles from "./styles";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

interface IInputProps {
  text?: string;
  password?: boolean;
  message?: {
    info?: string;
    error?: string;
    success?: string;
  };
}
const Input: React.FC<IInputProps> = ({ text, password, message }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styles.Container>
      <label>{text}</label>
      {!password ? (
        <input style={{ borderRadius: "0.25rem" }} />
      ) : (
        <Styles.PasswordBox>
          <input type={showPassword ? "text" : "password"} />
          <span onClick={handleChange}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
        </Styles.PasswordBox>
      )}
      {message && (
        <>
          {message.info && (
            <small style={{ color: "var(--grey-1)" }}>
              <AiOutlineInfoCircle /> {message.info}
            </small>
          )}
          {message.error && (
            <small style={{ color: "var(--negative)" }}>
              <AiOutlineExclamationCircle /> {message.error}
            </small>
          )}
          {message.success && (
            <small style={{ color: "var(--success)" }}>
              <AiOutlineCheckCircle /> {message.success}
            </small>
          )}
        </>
      )}
    </Styles.Container>
  );
};

export default Input;
