import { createSlice } from "@reduxjs/toolkit";

export interface FormType {
  name: String;
  last_name: String;
  fone: Number;
  cpf: Number;
  email: String;
  password: String;
  password_confirmation: String;
  zip_code: Number;
  city: String;
  uf: String;
}

const FormSLice = createSlice({
  name: "FormSlice",
  initialState: {
    name: "",
    last_name: "",
    fone: "",
    cpf: "",
    email: "",
    password: "",
    password_confirmation: "",
    zip_code: "",
    city: "",
    uf: "",
  },

  reducers: {
    AttForm: (state, action) => {
      state[action.payload.key as keyof typeof state] = action.payload.value;
    },
  },
});

export const { AttForm } = FormSLice.actions;
export default FormSLice.reducer;
