import { Link } from "react-router-dom";
import Styles from "./styles";

interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  clearData?: boolean;
}

function Header({ text, clearData, ...props }: IHeaderProps) {
  return (
    <Styles.Header {...props}>
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
