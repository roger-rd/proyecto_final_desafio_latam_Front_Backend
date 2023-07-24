import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MisPedidos() {
  const { setUsuario } = useContext(UserContext);

  useEffect(() => {
    const usuarioLocalStorage = localStorage.getItem("usuario");
    if (usuarioLocalStorage) {
      // Si hay un usuario registrado en el localStorage, actualiza el contexto
      setUsuario(JSON.parse(usuarioLocalStorage));
    }
  }, []);

  return (
    <div>
      hola es la pagina de mis pedidos
    </div>
  );
}