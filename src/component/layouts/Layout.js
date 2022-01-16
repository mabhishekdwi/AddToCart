import React from 'react';
import Maincontent from '../Maincontent'
import About from "../pages/About"
import Account from "../pages/Account"; 
import Footer from '../Footer'
import Navbar from '../Navbar';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,Switch
} from "react-router-dom";
const Layout = ({ children }) => {
    return (
    
     
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Maincontent} />
        <Route path="/About" component={About} />
        
        <Route path="/Account" component={Account} />
      </Switch>
        <Footer />
        </Router>
      
    );
};
export default Layout;