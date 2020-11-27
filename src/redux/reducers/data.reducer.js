import { SET_USERNAME } from "../actions/types";



const initialState = {
  username: ''
}

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload }

    default:
      return state
  }
}

export default dataReducer