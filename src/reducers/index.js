import cards from './cards';
import { combineReducers } from 'redux';
import visibilityFilter from './VisibilityFilter'

export default combineReducers({
  cards,
  visibilityFilter
})