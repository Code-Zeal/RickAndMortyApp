//ACTION  ADD FAVORITES
export const addFavorite = (product) => {
  return { type: "ADD_FAVORITES", payload: product };
};
//ACTION DELETE FAVORITE
export const deleteFavorite = (id) => {
  return { type: "DELETE_FAVORITES", payload: id };
};
//ACTION FILTRAR POR GENERO
export const filterCards = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};

//ACTION ORDENAR ASCENDIENTE Y DESCENDIENTE
export const orderCards = (value) => {
  return {
    type: "ORDER",
    payload: value,
  };
};
