import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
  } from "../constants/userConstants";

  const initialState = {
    token: null,
    loading: false,
    error: null,
  };



  
  export const userLoginReducer = (state = {error: ''}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload,error: ''};
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload};
      case USER_LOGOUT:
        return {};
      default:
        return state;
    }
  };


  // export const authReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'USER_LOGIN_REQUEST':
  //       return { ...state, loading: true };
  //     case 'USER_LOGIN_SUCCESS':
  //       return { ...state, loading: false, token: action.payload, error: null };
  //     case 'USER_LOGIN_FAIL':
  //       return { ...state, loading: false, error: action.payload };
  //     case 'USER_LOGOUT':
  //       return { ...state, token: null, loading: false, error: null };
  //     default:
  //       return state;
  //   }
  // };


  
  export const userRegisterReducer = (state = {error: ''}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload,error: ''};
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const userUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_UPDATE_REQUEST:
        return { loading: true };
      case USER_UPDATE_SUCCESS:
        return { loading: false, userInfo: action.payload, success: true };
      case USER_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
      default:
        return state;
    }
  };



  export const userLogoutReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };