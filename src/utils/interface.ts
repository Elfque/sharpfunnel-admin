import { ChangeEvent } from "react";

export type loginInputType = {
  name: string;
  value: string;
  type?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export type navLinkType = {
  url: string;
  text: string;
  icon: string;
};

export type singleOverviewType = {
  text: string;
  data: number;
  icon?: any;
  type: string;
};
