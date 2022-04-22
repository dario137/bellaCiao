import { ADD_REGISER_DATA, ADD_REAUTH_DATA, LOGOUT_USER, ADD_MONEY } from '../../api/redux'
import { Register } from '../action/auth/register'

const tokens = JSON.parse(localStorage.getItem('tokens'))
const login = localStorage.getItem('login')

const init = {
    user: {
      login: !!login ? login : '',
      tokens: !!tokens ? tokens : [],
      monets: "0.00",
      wax: null
    }
}
  
export const app = ( state = init, action ) => {
    switch (action.type) {
      case ADD_REGISER_DATA :
        const resultUser = Register(action)
        return {
          ...state,
          user: resultUser
        }
      case ADD_REAUTH_DATA :
        const copy = {...state.user}
        copy.wax = action.wax
        return {
          ...state,
          user: copy
        }
      case ADD_MONEY :
          const copy2 = {...state.user}
          copy2.monets = action.money
          return {
            ...state,
            user: copy2
          }
      case LOGOUT_USER :
        const user = {
          login: '',
          tokens: [],
          monets: "0.00",
          wax: null
        }

        localStorage.clear()
        return {
          ...state,
          user: user
      }
      default:
        return state
    }
  }