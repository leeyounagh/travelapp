import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    Add_TO_GOOD,
    GET_GOOD_ITEMS
} from './types';
export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}


export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response =>response.data)
    return {
        type: AUTH_USER,
        payload: request
    }
}



export function addToGood(id,image,address,title) {
   let body={
        contentsId:id,
        image:image,
        address:address,
        title:title
    }
    const request = axios.post('/api/users/addToGood',body)
    .then(response =>response.data)
return {
    type: Add_TO_GOOD,
    payload: request
}
 
}


export function getGoodItems(goodItems,usergood) {

//      const request = axios.get('/api/users/addToGood')
//      .then(response =>response.data)
//  return {
//      type: GET_GOOD_ITEMS,
//      payload: request
//  }
  
 }
 

