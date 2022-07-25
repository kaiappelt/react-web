/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {  useEffect, useState } from "react";
import {
  Container,
  Button,
  TextField,
} from "@mui/material";
import "./style.css";
import { validation } from "../../assets/helpers";
import { toast } from "react-toastify";

export const Form = () => {
  const [signUp, setSignUp] = useState("Sign Up");
  const [loadBtn, setLoadBtn] = useState(false);

  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [fone, setFone] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [foneError, setFoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [cityError, setCityError] = useState("");
  const [ufError, setUfError] = useState("");
  const [CPFError, setCPFError] = useState(false);

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <div>
        <TextField
          id="name"
          label="Nome"
          variant="outlined"
          margin="dense"
          autoComplete="off"
          fullWidth
          value={name}
          onChange={(event) => {setName(event.target.value)}}
        />
         <small className="text-danger">{nameError}</small>
        </div>
        <div>
        <TextField
          id="last_name"
          label="Sobrenome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={last_name}
          onChange={(event) => {setLastName(event.target.value)}}
        />
         <small className="text-danger">{lastNameError}</small>
        </div>
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          error={CPFError}
          helperText={CPFError && "Deve conter 11 dígitos. Insira apenas os números."}
          value={cpf}
          onBlur={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length !== 11) {
              setCPFError(true);
            } else {
              setCPFError(false);
            }
          }}
          onChange={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length === 11) {
              setCPFError(false);
            }

            setCpf(event.target.value)}
          }
        />
       <div>
        <TextField
        id="fone"
        label="Telefone"
        variant="outlined"
        margin="dense"
        autoComplete="off"
        fullWidth
        value={fone}
        onChange={(event) => {setFone(event.target.value)}}
      />
       <small className="text-danger">{foneError}</small>
      </div>
        <div>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="dense"
          autoComplete="off"
          fullWidth
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
         <small className="text-danger">{emailError}</small>
        </div>

        <div>
        <TextField
          id="password"
          type="password"
          label="Password"
          variant="outlined"
          margin="dense"
          autoComplete="off"
          fullWidth
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
        />
         <small className="text-danger">{passwordError}</small>
        </div>

        <div>
        <TextField
        id="password_Confirmation"
        type="password"
        label="Password Confirmation"
        variant="outlined"
        margin="dense"
        autoComplete="off"
        fullWidth
        value={password_confirmation}
        onChange={(event) => {setPasswordConfirmation(event.target.value)}}
      />
       <small className="text-danger">{passwordConfirmationError}</small>
      </div>
      <div>
        <TextField
        id="zip_Code"
        label="Zip_Code"
        variant="outlined"
        margin="dense"
        autoComplete="off"
        fullWidth
        value={zip_code}
        onChange={(event) => {setZipCode(event.target.value)}}
        // onKeyUp={(e) => {
        //   populateAddress(e.target.value);
        // }}
      />
       <small className="text-danger">{zipCodeError}</small>
      </div>

      <div>
        <TextField
        id="city"
        label="City"
        variant="outlined"
        margin="dense"
        autoComplete="off"
        fullWidth
        value={city}
        onChange={(event) => {setCity(event.target.value)}}
      />
       <small className="text-danger">{cityError}</small>
      </div>

      <div>
        <TextField
        id="uf"
        label="Uf"
        variant="outlined"
        margin="dense"
        autoComplete="off"
        fullWidth
        value={uf}
        onChange={(event) => {setUf(event.target.value)}}
      />
       <small className="text-danger">{ufError}</small>
      </div>

      <Button 
      disabled={loadBtn}
      // onClick={handleRegister}
        type="button"
        className="btn-form" 
        variant="contained" 
        color="primary">
          {signUp}
        </Button>
      </form>
    </Container>
  );

// async function handleRegister(e) {
//   e.preventDefault();

//   handleValidation();

//   if (validation.run()) {
//     setLoadBtn(true);
//     setSignUp("Loading...");

//     const geoLocationData = await getGeolocationData(city, uf);

//     const { lat, lon } = geoLocationData;

//     const data = {
//       name,
//       last_name,
//       fone,
//       cpf,
//       email,
//       password,
//       password_confirmation,
//       zip_code,
//       city,
//       uf,
//       lat,
//       lon,
//     };

//     await createUser(data)
//       .then((response) => {
//         console.log(response);

//         if (response.status === 200) {
//           handleClear();
//           return toast.success("Success!");

//         }
//       })
//       .catch((error) => {
//         if (error.request.status === 412) {
//           return toast.warning("This email already exists.");
//         }

//         return toast.warning("This action could not be performed.");
//       });

//     setLoadBtn(false);
//     setSignUp("Sign up");
//   } else {
//     handleValidationError();
//   }
// }

// async function populateAddress(zipCode) {
//   if (zipCode.length === 8) {
//     zipCode = zipCode.replace(/\D/g, "");

//     await zipCodeApi(zipCode)
//       .then((res) => {
//         setCity(res.localidade);
//         setUf(res.uf);
//       })
//       .catch(() => {
//         return toast.warning("Error requesting zip code data.");
//       });
//   }
// }

// async function getGeolocationData(city, uf) {
//   if (!city || !uf) {
//     return toast.warning("Error requesting geolocation data.");
//   }

//   let geolocationData = {};

//   await geolocationApi(city, uf)
//     .then((response) => {
//       geolocationData = response;
//     })
//     .catch(() => {
//       return toast.warning("Error requesting geolocation data.");
//     });

//   return geolocationData;
// }

// function handleValidation() {
//   validation.setRules(name, "name", "Username", 3);
//   validation.setRules(last_name, "name", "Username", 3);
//   validation.setRules(fone, "name", "Username", 11);
//   validation.setRules(password, "password", "Password", 6);
//   validation.setRules(zip_code, "zipCode", "Zip Code");
//   validation.setRules(city, "city", "City");
//   validation.setRules(uf, "uf", "UF");

//   validation.handleValidateEmail(email);
//   validation.confirmPasswords(
//     password,
//     password_confirmation,
//     "passwordConfirmation"
//   );
// }

// function handleValidationError() {
//   setNameError(validation.errors.name);
//   setLastNameError(validation.errors.lastName);
//   setFoneError(validation.errors.fone);
//   setEmailError(validation.errors.email);
//   setPasswordError(validation.errors.password);
//   setPasswordConfirmationError(validation.errors.passwordConfirmation);
//   setZipCodeError(validation.errors.zipCode);
//   setCityError(validation.errors.city);
//   setUfError(validation.errors.uf);
// }

// function handleClear() {
//   setName("");
//   setLastName("");
//   setFone("");
//   setCpf("");
//   setEmail("");
//   setPassword("");
//   setPasswordConfirmation("");
//   setZipCode("");
//   setCity("");
//   setUf("");

//   setNameError("");
//   setLastNameError("");
//   setFoneError("");
//   setEmailError("");
//   setPasswordError("");
//   setPasswordConfirmationError("");
//   setZipCodeError("");
//   setCityError("");
//   setUfError("");
// }
};