import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import 'antd/dist/antd.css';
import { Row } from 'antd';

const MovieCardList = ({ cards, toggleFavorite,toggleWatch }) => (
    <Row style={{ paddingBottom: '70px' }} gutter={24}>
        {cards.map(card => (
        <MovieCard key={card.id} {...card} favoritebtn={() => toggleFavorite(card.id)} watchbtn={() => toggleWatch(card.id)} />
        ))}
    </Row>
)

MovieCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
      favorited: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleWatch: PropTypes.func.isRequired
}

export default MovieCardList