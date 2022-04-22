import axios from 'axios'

export const Register = (data) => {
    const tokens = data.tokens
    const login = data.login
    localStorage.setItem("login", login)
    localStorage.setItem("tokens", JSON.stringify(tokens))
    
    return {
        login: data.login,
        tokens: tokens,
        wax: data.wax
    }
}

export const GeTMoney = async (login) => {
    const res = await axios.post("http://localhost:4000/api/getmonney", { login: login })
    return res
}