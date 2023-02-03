import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import {
  emailValidator,
  passwordValidator,
} from "../regexValidator/regexValidator";
import imagen from "./img/title.png";
import Rick from "./img/Rick2.png";
import RickError from "./img/RickError.png";
import Morty from "./img/Morty.png";
import MortyError from "./img/Morty Error.png";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/home");
  });
  const formSubmitter = (e) => {
    e.preventDefault();
    if (!emailValidator(input.email))
      return setErrorMessage("Porfavor Ingresar Un Correo Valido");
    if (!passwordValidator(input.password))
      return setErrorMessage("Porfavor Ingresar Una Contraseña Valida");
    if (
      input.email !== "Rickand_Morty@gmail.com" ||
      input.password !== "Password@1"
    ) {
      return setErrorMessage("Cuenta Invalida");
    }
    navigate("/home");
    localStorage.setItem("auth", true);
  };
  return (
    <div className={styles.main}>
      {errorMessage.length === 0 && (
        <img className={styles.rick} src={Rick} alt="Rick" />
      )}
      {errorMessage.length > 0 && (
        <img className={styles.rickError} src={RickError} alt="Rick" />
      )}

      <form action="" onSubmit={formSubmitter} className={styles.form}>
        <img className={styles.imgForm} src={imagen} alt="Rick&MortyTitle" />
        Rickand_Morty@gmail.com
        <input
          autocomplete="off"
          type="text"
          name="email"
          onChange={handleChange}
          className={styles.input}
          placeholder="Email"
        />
        Password@1
        <input
          autocomplete="off"
          type="text"
          name="password"
          onChange={handleChange}
          className={styles.input}
          placeholder="Password"
        />
        {errorMessage.length > 0 && (
          <p className={styles.error}>{errorMessage}</p>
        )}
        <button className={styles.ingresar}>Ingresar</button>
      </form>
      {errorMessage.length === 0 && (
        <img className={styles.morty} src={Morty} alt="Morty" />
      )}
      {errorMessage.length > 0 && (
        <img className={styles.mortyError} src={MortyError} alt="Morty" />
      )}
    </div>
  );
}

export default Login;
