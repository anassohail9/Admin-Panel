import react, { useEffect, useMemo, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Signin from './container/Signin'
import Signup from './container/Signup'
import { Provider } from 'react-redux'
import axios from  'axios'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthtoken'
import BasicTable from './components/layout/Table';
import  {NewData}  from './components/layout/Newdata'
import {COLUMNS} from './components/layout/Column'

if(localStorage.token) {
  setAuthToken(localStorage.token);
} 

const App = () => {
  useEffect(() => {
   store.dispatch(loadUser());
  },[])


 
  return (
     <Provider store = { store }>
      <div className="App">    
        <Router>
        <Switch>
          <Route path ="/" exact={true} component = { Home }></Route>
          <Route path ="/home" exact={true} component = { Home }></Route>
          <Route path ="/Signin" exact={true} component = { Signin } ></Route>
          <Route path ="/Signup" exact={true} component = { Signup } ></Route>
       </Switch> 
       </Router>
      </div>
     </Provider>

  );
}

export default App;

