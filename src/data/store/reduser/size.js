import { ADD_WIDTH, ADD_CLAIMED, OVERFLOW_HIDDEN, OVERFLOW_AUTO, SET_DEVICE_PHONE } from '../../api/redux'

const init = {
    width: 0,
    claimed: "",
    overflow: false,
    phone: false
}
  
export const size = ( state = init, action ) => {
    switch (action.type) {
      case ADD_WIDTH :
        return {
            ...state,
            width: action.width
        }
      case ADD_CLAIMED :
        return {
            ...state,
            claimed: action.claimed
        }
      case OVERFLOW_HIDDEN :
        return {
            ...state,
            overflow: true
          }
      case OVERFLOW_AUTO :
        return {
            ...state,
            overflow: false
        }
      case SET_DEVICE_PHONE :
        return {
            ...state,
            phone: action.phone
        }
      default:
        return state
    }
  }