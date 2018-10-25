import React from 'react'
import Filter from './Filter'
import VisibleCardList from '../containers/VisibleCardList'
import AddCard from '../containers/AddCard'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header} = Layout;

const App = () => (
  <div>
    <Header style={{backgroundColor:'#282c34',width:'100%'}}>
      <AddCard/>
    </Header>
      <Filter />
    <div style={{margin:10}}>
    <VisibleCardList/>
    </div>
  </div>
)

export default App