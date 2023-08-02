import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [platos, setPlatos] = useState([]);
  const [favorito, setfavorito] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlatosData = async () => {
    try {
      const response = await fetch("/platos.json");
      if (!response.ok) throw new Error("NO SE PUEDE DESPLEGAR LA INFORMACIÓN");
      const data = await response.json();

      
      const favoritoData = data.map((plato) => ({ ...plato, favorito: false }));

      setPlatos(data);
      setfavorito(favoritoData);
    } catch (error) {
      setError(error);
    }
  };

  const resetFavoritos = () => {
    const favoritoData = platos.map((plato) => ({ ...plato, favorito: false }));
    setfavorito(favoritoData);
  };


  useEffect(() => {
    fetchPlatosData();
  }, []);


    return (
        <UserContext.Provider value={{usuario,setUsuario, platos, setPlatos, error, setError,favorito,setfavorito, resetFavoritos }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);