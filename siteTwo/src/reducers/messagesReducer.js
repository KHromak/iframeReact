import * as actions from '../actions/messagesActions'
import { POST_MESSAGE } from '../actions/messagesActions'

export const initialState = {
  message: ''
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {

    case POST_MESSAGE:
      
      return { ...state, message: action.payload }
    default:
      return state
  }
}

export default messagesReducer