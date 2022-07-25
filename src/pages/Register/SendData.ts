/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormType } from "./../../store/redux/FormSlice";
import api from "./../../api/index";

export const SendData = (props: FormType) => {
  const Filtered = Object.entries(props).filter(
    ([_key, value]) => value !== ""
  );
  const propsFiltered = Object.fromEntries(Filtered);

  return api.patch("/register", propsFiltered).catch((err) => {
    throw err;
  });
};
