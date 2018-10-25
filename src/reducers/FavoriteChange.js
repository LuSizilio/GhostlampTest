const initialState = {
    watched: false,
    favorite: false
  };


export const FavoriteChange = (state = initialState, action) => {
    switch (action.type) {
      case 'FAVORITE':
        return {
          ...state,
          favorite: true
        };
      case 'UNFAVORITE':
        return {
          ...state,
          favorite: false
        };
      default:
        return state;
    }
}