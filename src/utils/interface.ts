import { ChangeEvent } from "react";

export type loginInputType = {
  name: string;
  value: string;
  type?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
