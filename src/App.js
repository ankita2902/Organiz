import React from 'react';
import {Space} from 'antd';

import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';
import Charts from './Pages/charts';





function App() {
  return (
    <>
    <div className="App">
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent><Charts/></PageContent>
      </Space>
      <AppFooter/>
    </div>
    </>
  );
}

export default App;
