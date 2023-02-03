const initialState = {
  myFavorites: [],
  allCharacters: [],
  aux: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case "DELETE_FAVORITES":
      console.log(state);
      const favoritesFilter = state.myFavorites.filter(
        (word) => word.id !== action.payload
      );
      const allFilter = state.allCharacters.filter(
        (word) => word.id !== action.payload
      );
      return {
        ...state,
        myFavorites: favoritesFilter,
        allCharacters: allFilter,
      };
    case "FILTER":
      const all = state.allCharacters;
      const filter =
        action.payload === "All"
          ? all
          : all.filter((word) => word.gender === action.payload);

      return {
        ...state,
        myFavorites: filter,
        aux: filter.length > 0 ? [...filter] : "esta filtrado pero no hay nada",
      };

    case "ORDER":
      let characterSort =
        state.aux.length > 0 ? [...state.aux] : [...state.allCharacters];

      characterSort =
        action.payload === "Ascendiente"
          ? characterSort.sort((a, b) => {
              if (a.id > b.id) return 1;
              if (a.id < b.id) return -1;
              return 0;
            })
          : characterSort.sort((a, b) => {
              if (a.id < b.id) return 1;
              if (a.id > b.id) return -1;
              return 0;
            });

      return {
        ...state,
        myFavorites: characterSort,
      };
    //CASO DEFAULT
    default:
      return { ...state };
  }
};

export default reducer;
