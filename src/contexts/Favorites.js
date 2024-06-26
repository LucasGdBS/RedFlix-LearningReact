import { createContext, useContext, useState } from "react"; // Import do createContext e useState

export const FavoritesContext = createContext(); // Criação do contexto
FavoritesContext.displayName = "MyFavorites"; // Define um Nome para o contexto

export default function FavoritesProvider({ children }) { // Criação de Provider
  // O Provider é um componente que envolve a aplicação e fornece o contexto para todos os componentes filhos
  const [ favorite, setFavorite ] = useState([]); // Criação do estadom (favorite) e função para alterar o estado (setFavorite
  
  return ( // Retorna o Provider com o valor do estado e a função para alterar o estado
    <FavoritesContext.Provider
        value={{favorite, setFavorite}}
    >
        {children}
    </FavoritesContext.Provider>
  );
}

// Hook Personalizado
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Verificar se o novo favorito já existe na lista
    const exists = favorite.some((item) => item.id === newFavorite.id);

    // Cria uma cópia da lista atual de favoritos
    let newList = [...favorite];

    if (exists) {
      // Se o novo favorito já existir na lista, remove-o
      newList = newList.filter((item) => item.id !== newFavorite.id);
    } else {
      // Se o novo favorito não existir na lista, adiciona-o
      newList.push(newFavorite);
    }

    // Atualiza o estado global de favoritos com a nova lista
    setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}