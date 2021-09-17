import * as types from './actionsType'

const initialState = {
  users: [],
  user: {},
  loading: true
}

 const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case types.GET_USERS:
    return {
      ...state,
      users: action.payload,
      loading: false
    }
    case types.DELETE_USER:
    case types.ADD_USER:
    return {
      ...state,
      user: action.payload
    }
    case types.UPDATE_USER:
    return{
      ...state,
      user: action.payload
    }
    return {
      ...state,
      loading: false
    }
    case types.LOAD_USERID:
    return {
      ...state,
      user: action.payload,
      loading: false
    }
    default:
    return state;
  }
}

export default usersReducer
