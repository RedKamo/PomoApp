import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Layout from './pages/Layout';
import SignUp from './components/SignUp';

function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/signup" component={SignUp}/>
      </Layout>
    </BrowserRouter>
  )
}

export default App;