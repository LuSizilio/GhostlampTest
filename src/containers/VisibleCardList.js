import { connect } from 'react-redux'
import { toggleFavorite } from '../actions'
import { toggleWatch } from '../actions'
import MovieCardList from '../components/MovieCardList'
import { VisibilityFilters } from '../actions'

const getVisibleCards = (cards, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cards
    case VisibilityFilters.SHOW_FAVORITES:
      return cards.filter(t => t.favorited)
    case VisibilityFilters.SHOW_WATCHED:
      return cards.filter(t => t.watched)
    default:
        throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  cards: getVisibleCards(state.cards, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleFavorite: id => dispatch(toggleFavorite(id)),
  toggleWatch: id => dispatch(toggleWatch(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCardList)