import { Link } from "react-router-dom";
import Styles from "./styles";

interface IHeaderProps {
  text?: string;
  clearData?: boolean;
}

function Header({ text, clearData }: IHeaderProps) {
  return (
    <Styles.Header>
      <h1>Dexter Hub</h1>
      {text && (
        <Link to={"/"} onClick={() => clearData && localStorage.clear()}>
          {text}
        </Link>
      )}
    </Styles.Header>
  );
}

export default Header;
