import React from 'react'
import Navbar from './components/Nav'
import VisibleCardList from './containers/VisibleCardList'
import AddCard from './components/AddCard'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header} = Layout;

const App = () => (
  <div>
    <Header style={{backgroundColor:'#282c34',width:'100%'}}>
      <AddCard/>
    </Header>
      <Navbar />
    <div style={{margin:10}}>
    <VisibleCardList/>
    </div>
  </div>
)

export default App