import Styles from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "small";
  children: React.ReactNode;
}

function Button({ variant = "primary", children, ...props }: IButtonProps) {
  return (
    <Styles.Button primary={variant === "primary"} {...props}>
      {children}
    </Styles.Button>
  );
}

export default Button;
