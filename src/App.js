import React , { useEffect, useState, useContext } from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'
import { Container } from './components/Container.styled'
import {
    Home,
    Collections,
    Edbeard
} from './pages'
import Navbar from "./components/Navbar"
import 'aos/dist/aos.css';
import './assets/css/bootstrap.min.css'
import './assets/css/global.css'

// import '../../assets/css/style.css';
// import './global.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  return (
    
    	<div className="App">
         <Navbar/>
         <Container>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            NFTNT.io
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script src="https://kit.fontawesome.com/1d1fa0ef76.js" crossorigin="anonymous"></script>
        </Helmet>
      
        <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/Collections" exact component={Collections} />
        <Route path="/EdBeardJr" exact component={Edbeard} />
       
        </Switch>
      
        </Container>
	    </div>
    
    
  );
}

export default App;