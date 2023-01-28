import React from "react";
import { useGetMostrarQuery } from "../../redux/Store";
import "../Estilos.css";

export const Login = () => {

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        const usuario = e.target.usuario.value;
        const contraseña = e.target.contraseña.value;
        console.log(usuario);
        console.log(contraseña);
    }

    const {data:datos, isError, error, isSuccess}= useGetMostrarQuery();
    if(isSuccess) console.log(datos)
    if(isError) console.log(error)


  return (
    <>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleOnSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="usuario"
                autoComplete="username"
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="contraseña"
                autoComplete="current-password"
              />
              <label>Password</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Ingresar
            </button>
          </form>
          <a href='/Registro'>Registrate</a>
        </div>
    </>
  );
};
