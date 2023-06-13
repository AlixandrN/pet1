export interface ILangBox {
  logoName: string;
  exit: string;
  main: string;
  profile_page: string;
  orders_history_page: string;
  locations: string;
  test: string;
  sign_in: string;
}

const enBox: ILangBox = {
  logoName: "Burger",
  exit: "Exit",
  main: "Main",
  profile_page: "Profile",
  orders_history_page: "Orders history",
  locations: 'Locations',
  test: 'Test',
  sign_in: 'Sign in',
};

const ruBox: ILangBox = {
  logoName: "Бургер",
  exit: "Выход",
  main: "Главная",
  profile_page: "Профиль",
  orders_history_page: "История заказов",
  locations: 'Адреса',
  test: 'Тест',
  sign_in: 'Войти',
};

type ObjectKey<Obj> = keyof Obj;
export type TLangKeys = ObjectKey<ILangBox>;

export const getLang = (word: TLangKeys, isEnglish = true): string => {
  if (!isEnglish) {
    return ruBox[word];
  } else return enBox[word];
};
