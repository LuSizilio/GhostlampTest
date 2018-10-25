import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';

import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

var favoritebtn;
const clickButton = () => ({
    type: 'FAVORITE'
  });

const Cartao = ({title, subtitle, src, watched, favorite}) => (
    <Card
        style={{ width: 300}}
        
        cover={src!==""?<img alt="imagem" src={src} />:null}
        actions={[<div>{watched?"❌":"✔"}</div>, <div onClick={clickButton} style={favorite?{filter: 'grayscale(0%)'}:{filter: 'grayscale(100%)'}}>⭐</div>]}
      >
        <Meta
          avatar={
            <Avatar style={watched?{backgroundColor:'#37c670'}:{backgroundColor:'#c73838'}}>
                <div ></div>
            </Avatar>
          }
          title={title}
          description={subtitle}
        />
    </Card>
)
Cartao.propTypes = {
    watched: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired
}

// class Cartao extends Component {
//     state = {
//         title: '',
//         subtitle: '',
//         src: '',
//         watched: false,
//         favorite: false,
//         favoritebtn: ''
//     }
//     inputChange = event => {
//         this.setState({
//           favorite: event.target.value         
//         })
//         console.log(event);
//       }

//   render(props) {
//     const { 
//         favorited
//       } = this.props;

    

//     return (
//       <Card
//         style={{ width: 300}}
        
//         cover={this.props.src?<img alt="imagem" src={this.props.src} />:null}
//         actions={[<div>{this.props.watched?"❌":"✔"}</div>, <div onChange={this.inputChange} onClick={favoritebtn} style={this.props.favorite?{filter: 'grayscale(0%)'}:{filter: 'grayscale(100%)'}}>⭐</div>]}
//       >
//         <Meta
//           avatar={
//             <Avatar style={this.props.watched?{backgroundColor:'#37c670'}:{backgroundColor:'#c73838'}}>
//                 <div ></div>
//             </Avatar>
//           }
//           title={this.props.title}
//           description={this.props.subtitle}
//         />
//       </Card>
//     );
//   }
// }

const mapStateToProps = store => ({
    favorited: store.favorite
  });  

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cartao);