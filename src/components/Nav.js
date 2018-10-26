import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import 'antd/dist/antd.css';
import '../App.css';
import {  Menu } from 'antd';
import { Button } from 'antd';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

// const Footer = () => (
//   <Menu mode="horizontal" className='btnas' style={{ lineHeight: '64px', backgroundColor:'#282c34', color:'#FFFFFF'}}>
//     <Menu.Item className='btnas ant-menu-item'>
//       <FilterLink filter={VisibilityFilters.SHOW_ALL}><div style={{cursor:'pointer'}}>All</div></FilterLink>
//     </Menu.Item>

//     <Menu.Item className='ant-menu-item'>
//       <FilterLink filter={VisibilityFilters.SHOW_WATCHED}><div style={{cursor:'pointer'}}>Watched</div></FilterLink>
//     </Menu.Item>

//     <Menu.Item className='ant-menu-item'>
//       <FilterLink filter={VisibilityFilters.SHOW_FAVORITES}><div style={{cursor:'pointer'}}>Favorites</div></FilterLink>
//     </Menu.Item>

//     <Menu.Item className='ant-menu-item'>
//       <FilterLink filter={VisibilityFilters.SHOW_UNWATCHED}><div style={{cursor:'pointer'}}>Unwatched</div></FilterLink>
//     </Menu.Item>

//     <Menu.Item className='ant-menu-item menu-float-right'>
//       <Button style={{
//       backgroundColor:'#282c34',
//       marginLeft: '4px',
//       border:'none',
//       fontWeight:"bolder",
//       outline:'none',
//       color:'#ff4040'
//     }}>Log Out</Button>
//     </Menu.Item>
//   </Menu>
// )

class Footer extends Component {
  render() {
    return (
      <Menu mode="horizontal" className='btnas' style={{ lineHeight: '64px', backgroundColor:'#282c34', color:'#FFFFFF'}}>
    <Menu.Item className='btnas ant-menu-item'>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}><div style={{cursor:'pointer'}}>All</div></FilterLink>
    </Menu.Item>

    <Menu.Item className='ant-menu-item'>
      <FilterLink filter={VisibilityFilters.SHOW_WATCHED}><div style={{cursor:'pointer'}}>Watched</div></FilterLink>
    </Menu.Item>

    <Menu.Item className='ant-menu-item'>
      <FilterLink filter={VisibilityFilters.SHOW_FAVORITES}><div style={{cursor:'pointer'}}>Favorites</div></FilterLink>
    </Menu.Item>

    <Menu.Item className='ant-menu-item'>
      <FilterLink filter={VisibilityFilters.SHOW_UNWATCHED}><div style={{cursor:'pointer'}}>Unwatched</div></FilterLink>
    </Menu.Item>

    <Menu.Item className='ant-menu-item menu-float-right'>
    <Link to='/Login'>
      <Button onClick={() => firebase.auth().signOut()} style={{
      backgroundColor:'#282c34',
      marginLeft: '4px',
      border:'none',
      fontWeight:"bolder",
      outline:'none',
      color:'#ff4040'
    }}>Log Out</Button>
    </Link>
    </Menu.Item>
  </Menu>
    );
  }
}


export default Footer