import "./navigation2.css"
import React, { useState, useContext,} from 'react'
import {RpcError} from 'eosjs';
import {UALContext} from "ual-reactjs-renderer";
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import results from '../../assets/js/results'
import axios from "axios";

function Navbar() {
  const state = {
    accountName:'',
    pubKeys: '',
    requestPermission: '',

  }
  
  const [click, setClick] = useState(null, state);
  const ual = useContext(UALContext);
  const login = async () => {
    
    setLoggedIn(false);
    ual.logout();
    ual.showModal();
  }
const logout = () => {
  setLoggedIn(false);
  ual.logout();
}
const balance = async () => {
  ual.getAccountBalance();
  ual.accountBalance();

}

    
 
 
  const [loggedIn, setLoggedIn] =useState(null);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  const setUserData = (e) =>{
    e.preventDefault();
    const Data = {
      accountName:this.state.accountName,
      pubKeys:this.state.pubKeys,
      requestPermission:this.state.requestPermission,
    }
    results.post('/user.json', Data).then(response => {
      console.log(response);
    })
  }
  return (
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <icon className="nav-logo">
          <NavLink exact to="/" className="nav-logo">
          </NavLink>
          </icon>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          <div className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink
                exact
                to="/Collections"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Collections
              </NavLink>
            </li> 
          {/*  <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>*/}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            
      
            
            <div>
         <span>   
            {ual?.activeUser ?
        <>
            <p>
                
                <li><button className="login-btn" onClick={() => logout()}>Hello, {ual.activeUser.accountName}! </button></li>
            </p>
            {loggedIn 
            }
        </>:
        <button className="login-btn" onClick={() => login().then(response => axios.post)}>Connect your wax wallet</button>}
        </span>
        </div>
           
            
            

     
        </div>
        </div>
      </nav>
      </div>
  );
}
export default Navbar