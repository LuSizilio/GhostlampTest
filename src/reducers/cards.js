const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          subtitle: action.subtitle,
          src: action.src,
          watched: false,
          favorited: false
        }
      ]
    case 'TOGGLE_FAVORITE':
      return state.map(
        card =>
          card.id === action.id ? { ...card, favorited: !card.favorited } : card
      )
    case 'TOGGLE_WATCH':
      return state.map(
        card =>
          card.id === action.id ? { ...card, watched: !card.watched } : card
      )
    default:
      return state
  }
}


export default cards