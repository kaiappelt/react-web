import { createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  nome: string;
  email: string;
  cpfCnpj: string;
}
const Auth = createSlice({
  name: "AuthSlice",
  initialState: {
    value: { nome: "", email: "", cpfCnpj: "" },
  },
  reducers: {
    Login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Login } = Auth.actions;
export default Auth.reducer;
