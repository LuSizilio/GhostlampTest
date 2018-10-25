import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

import 'antd/dist/antd.css';
import { Card, Avatar, Col } from 'antd';
const { Meta } = Card;

class MovieCard extends Component {

  render() {
    return (
      <Col lg={8}>
      <Card
        style={{ width: 300}}
        
        cover={this.props.src!==""?<img alt="img" src={this.props.src} />:null}
        actions={this.props.ex?null:[<div onClick={this.props.watchbtn}>{this.props.watched?"❌":"✔"}</div>, <div onClick={this.props.favoritebtn} style={this.props.favorited?{filter: 'grayscale(0%)'}:{filter: 'grayscale(100%)'}}>⭐</div>]}
      >
        <Meta
          avatar={
            this.props.ex?null:
            <Avatar style={this.props.watched?{backgroundColor:'#37c670'}:{backgroundColor:'#c73838'}}>
                <div ></div>
            </Avatar>
          }
          title={this.props.title}
          description={this.props.subtitle}
        />
      </Card>
      </Col>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  watched: PropTypes.bool.isRequired,
  favorited: PropTypes.bool.isRequired,
  favoritebtn: PropTypes.func.isRequired,
  watchbtn: PropTypes.func.isRequired
}

export default MovieCard;