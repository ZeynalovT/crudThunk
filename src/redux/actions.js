import * as types from './actionsType'
import axios from 'axios'


const getUsers = (users) => {
  return{
    type: types.GET_USERS,
    payload: users,
  }
}


const addUserType = (user) => {
  return{
    type: types.ADD_USER,
    payload: user
  }
}

const loadUserIdType = (user) => {
  return{
    type: types.LOAD_USERID,
    payload: user
  }
}

const updateUserType = (user, id) => {
  return{
    type: types.UPDATE_USER,
    payload: user, id
  }
}

const deleteUserType = () => {
  return{
    type: types.DELETE_USER,
  }
}


export const loadUsers = () => {
  return function(dispatch){
    axios.get(`${process.env.REACT_APP_API}`)
    .then((resp) => {
      console.log('rest', resp)
      dispatch(getUsers(resp.data))
    })
  }
}

export const loadUserId = (id) => {
  return function(dispatch){
    axios.get(`${process.env.REACT_APP_API}/${id}`)
    .then((resp) => {
      console.log('rest', resp)
      dispatch(loadUserIdType(resp.data))
    })
  }
}

export const updateUserId = (user, id) => {
  return function(dispatch){
    axios.put(`${process.env.REACT_APP_API}/${id}`, user)
    .then((resp) => {
      console.log('rest', resp)
      dispatch(loadUserIdType(resp.data))
    })
  }
}




export const deleteUser = (id) => {
  return function(dispatch){
    axios.delete(`${process.env.REACT_APP_API}/${id}`)
    .then((resp) => {
      console.log('rest', resp)
      dispatch(deleteUserType())
      dispatch(loadUsers())
    })
  }
}

export const addUser = (user) => {
  return function(dispatch){
    axios.post(`${process.env.REACT_APP_API}`, user)
    .then((resp) => {
      console.log('rest', resp)
      dispatch(addUserType())
      dispatch(loadUsers())
    })
  }
}
