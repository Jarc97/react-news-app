import React, { FC } from "react";

interface Props {
  title: string;
  title2: string;
  fn: (str1:string, str2:string) => string;
}

const Button: FC<Props> = ({ title, title2, fn }) => {
  return <button>{fn(title, title2)}</button>;
};

export default Button;