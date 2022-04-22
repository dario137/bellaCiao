// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { JsonRpc } from 'eosjs';
import { UALProvider } from 'ual-reactjs-renderer';
import { Wax } from "@eosdacio/ual-wax";
import { Anchor } from 'ual-anchor';
import { getAnalytics } from "firebase/analytics";
import Preloader from './components/Preloader';
import  configureStore  from './data/store/init.js'

const appName = "nftnt.io";

const chains = {
    chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
    rpcEndpoints: [
        {
            protocol: 'https',
            host: 'wax.greymass.com',
            port: 443,
        }
    ],
};

const store = configureStore();

const endpoint = `${chains.rpcEndpoints[0].protocol}://${chains.rpcEndpoints[0].host}:${chains.rpcEndpoints[0].port}`;
const rpc = new JsonRpc(endpoint);

const wcw = new Wax([chains]);
const anchor = new Anchor([chains], { appName: appName });
 
ReactDOM.render(
	<BrowserRouter>
		<UALProvider
			appName={appName}
			authenticators={[wcw, anchor]}
			chains={[chains]}
            store={[store]}
			>
            <Preloader />
		<App />
		</UALProvider>
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
