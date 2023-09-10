export const initialState = {
  favorites: [],
  page: 1,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "Add to Favorite":
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case "Remove Favorite":
      return {
        ...state,
        favorites: state.favorites.filter((ele) => ele.id !== payload),
      };
    case "Increase Page":
      return {
        ...state,
        page: state.page + 1,
      };

    case "Decrease Page":
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};
