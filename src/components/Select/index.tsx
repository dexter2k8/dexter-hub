import Styles from "./styles";
import { Control, Controller, FieldValues } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface IOptions {
  value: string;
  label: string;
}

interface ISelectProps<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  control?: T extends FieldValues ? Control<T> : never;
  name: string;
  label: string;
  options: IOptions[];
}

const Select = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  ...selectProps
}: ISelectProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0].value}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Styles.Container>
          <label htmlFor="select">{label}</label>
          <Styles.Component>
            <select id="select" onChange={onChange} value={value} {...selectProps}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && (
              <small style={{ color: "var(--negative)" }}>
                <AiOutlineExclamationCircle /> {error?.message}
              </small>
            )}
          </Styles.Component>
        </Styles.Container>
      )}
    />
  );
};

export default Select;
