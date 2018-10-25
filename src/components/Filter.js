import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import 'antd/dist/antd.css';
import '../App.css';
import {  Menu } from 'antd';

const Footer = () => (
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
  </Menu>
)

export default Footer