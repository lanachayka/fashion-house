import style from "./NumberInput.module.css";

type Props = {
  defaultValue?: number;
  value?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput: React.FC<Props> = ({
  defaultValue,
  onChange,
  value,
}) => {
  return (
    <input
      type="number"
      min="1"
      max="5"
      className={style.input}
      defaultValue={defaultValue}
      onChange={onChange}
      value={value}
      data-testid="numberBox"
    />
  );
};
