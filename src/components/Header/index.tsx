import { Link } from "react-router-dom";
import Styles from "./styles";

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  clearData?: boolean;
}

function Header({ buttonText, clearData, ...props }: IHeaderProps) {
  return (
    <Styles.Header refAlign={buttonText ? "left" : "center"} {...props}>
      <h1>Dexter Hub</h1>
      {buttonText && (
        <Link to={"/"} onClick={() => clearData && localStorage.clear()}>
          {buttonText}
        </Link>
      )}
    </Styles.Header>
  );
}

export default Header;
