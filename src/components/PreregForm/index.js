import { Route, Switch, NavLink, Link } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import ReactDOM from "react-dom"
import { UALContext } from 'ual-reactjs-renderer';

function PreregForm() {
    const [inputs, setInputs] = useState({});
   
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }


    return (
        <form onSubmit={handleSubmit}>

            <label>Confirm WAX Wallet is Correct
                <input
                    type="text"
                    name="walletAddress"
                    value={inputs.walletAddress || "" }
                    onChange={handleChange}
                />
            </label>
            

            <label>What can we call you?
                <input
                    type="text"
                    name="username"
                    value={inputs.username || "name"}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}
ReactDOM.render(<PreregForm />, document.getElementById('root'));

export default PreregForm
