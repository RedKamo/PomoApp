import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home_Layout from '../pages/Home_Layout';

const Layout = (props)=>{
  return(
    <div className="layout_container">
      <React.Fragment>
        <Header/>
        <Sidebar/>
      </React.Fragment>
      <React.Fragment>
        {props.children}
      </React.Fragment>
    </div>
  )
}

export default Layout;