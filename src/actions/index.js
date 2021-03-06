let nextCardId = 0
export const addCard = (title,subtitle,src) => ({
  type: 'ADD_CARD',
  id: nextCardId++,
  title,
  subtitle,
  src
})

// import {showsRef} from '../config/firebase'

// export const addCard = (title,subtitle,src, uid) => async dispatch => {
//   showsRef
//     .child('shows')
//     .child(uid)
//     .push()
//     .set(title)
//     .set(subtitle)
//     .set(src);
// };

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleFavorite = id => ({
    type: 'TOGGLE_FAVORITE',
    id
  })

export const toggleWatch = id => ({
    type: 'TOGGLE_WATCH',
    id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FAVORITES: 'SHOW_FAVORITES',
  SHOW_WATCHED: 'SHOW_WATCHED',
  SHOW_UNWATCHED: 'SHOW_UNWATCHED'
}