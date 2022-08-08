// @ts-ignore
import colorLogo from "../../images/colorLogo.svg";
// @ts-ignore
import whiteLogo from "../../images/whiteLogo.svg";

export enum LogoTypes {
  color = "color",
  white = "white",
}

type Props = {
  type: LogoTypes;
  className: string;
};

export const Logo: React.FC<Props> = ({ type, className }) => {
  return (
    <img src={type === LogoTypes.color ? colorLogo : whiteLogo} alt="Logo" className={className} />
  );
};