import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


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