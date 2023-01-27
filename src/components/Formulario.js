/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Alert, AlertIcon, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { usePostMostrarMutation } from "../redux/Store";
import "./Estilos.css";

export const Formulario = () => {
  const [alert, setAlert] = useState(false); //ALERTA DE USUARIO REPETIDO

  const [dataUser, setDataUser] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();
    setDataUser({
      dataUser,
      [e.target.usuario]: e.target.value,
    });
    console.log(dataUser);
  };

  /*----------------- LLAMADO DE LA BASE DE DATOS ---------------------*/
  const [createDate, { data: baseData, isError, error: msgError, isSuccess }] =
    usePostMostrarMutation();
  if (isError) console.log(msgError);
  if (isSuccess) console.log(baseData);

  /*----------------- FUNCION GUARDAR ---------------------*/
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const usuario = e.target.usuario.value;
    const contraseña = e.target.contraseña.value;

    /*----------------- ALERTA DE VALIDACION DE DOS NOMBRES IGUALES ---------------------*/
    if (isError) {
      console.log(msgError);
      setTimeout(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 1000);
      }, 0);
    }
    createDate({
      usuario,
      contraseña,
    });
    e.target.reset();
  };

  /*----------------- INICIA ---------------------*/
  return (
    <>
      <ChakraProvider>
        {alert ? (
          <Alert status="error">
            <AlertIcon />
            <p>{msgError?.data?.msg}</p>
          </Alert>
        ) : null}
        <div className="login-box">
          <h2>Registro</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit(e);
            }}
          >
            <div className="user-box">
              <input
                type="text"
                name="usuario"
                autoComplete="username"
                onChange={handleOnchange}
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="contraseña"
                autoComplete="current-password"
                onChange={handleOnchange}
              />
              <label>Password</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Iniciar
            </button>
          </form>
        </div>
      </ChakraProvider>
    </>
  );
};
/*----------------- FINALIZA ---------------------*/
export default Formulario;
