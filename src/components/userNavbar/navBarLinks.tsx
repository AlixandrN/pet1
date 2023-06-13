import { TLangKeys } from "../../constants";

export interface INavBarLink {
  path: string;
  title: TLangKeys;
  iconName: string;
}

export const navBarLinks: INavBarLink[] = [
  {
    path: "/navbar/account",
    title: "main",
    iconName: "HomeIcon",
  },
  {
    path: "/navbar/profile",
    title: "profile_page",
    iconName: "BankCardIcon",
  },
  {
    path: "/navbar/history",
    title: "orders_history_page",
    iconName: "CreditsIcon",
  },
];
