import React from 'react';

//Components in this layout
import Sidebar from '../components/Sidebar';
import Sidebar_Projects from '../components/Sidebar_Projects';

//import styles


const Home_Layout =()=>{
  return(
    <React.Fragment>
      <Sidebar/>
      <Sidebar_Projects/>
    </React.Fragment>
  )
}

export default Home_Layout;