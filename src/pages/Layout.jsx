import React from 'react';
import Header from '../components/Header';

const Layout = (props)=>{
  return(
    <div className="layout_container">
      <React.Fragment>
        <Header/>
      </React.Fragment>
      <React.Fragment>
        {props.children}
      </React.Fragment>
    </div>
  )
}

export default Layout;