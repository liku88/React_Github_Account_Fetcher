import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Route, Link, BrowserRouter as Router , Switch} from "react-router-dom"

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase/app';
import "firebase/auth"

import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from './Pages/Signup'
import NotFound from './Pages/NotFound'
import { UserContext } from './Context/UserContext';
import Footer from './layouts/Footer';
import Header from './layouts/Header'

import FirebaseConfigApp from "./Config/FirebaseConfig"

firebase.initializeApp(FirebaseConfigApp)

const App = () => {
  const [user , setUser] = useState(null)
  return(
    <Router>
   <ToastContainer />
   <UserContext.Provider value={{user, setUser}}>
   <Header / >
   <Switch>
   
   <Route exact path= "/" component={Home}  />
   <Route exact path= "/signin" component={Signin}  />
   <Route exact path= "/signup" component={Signup}  />
   <Route exact path= "*" component={NotFound}  />
   
   </Switch>
   
   
   
   <Footer />
   
   
   </UserContext.Provider>
   </Router>
  )
}

export default App;
