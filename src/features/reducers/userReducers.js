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
  FETCH_LOCALSTORAGE_DATA,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  FETCH_VITALS_REQUEST,
  FETCH_VITALS_SUCCESS,
  FETCH_VITALS_FAILURE,
 
} from "../constants/userConstants";

const initialState = {
  token: null,
  loading: false,
  error: null,
  data: [],
  userData: null,
  storedData: null,
  // profiledata:[{name:'muthukumar'}],
  profileData: null,
  vitals: null,
  foodMenu: null,
  isAuthenticated: false,


};




export const userLoginReducer = (state = { token: null, userdata: null, loading: false, error: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload, token: action.payload.token, userdata: action.payload.userdata, error: null };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, token: null, userdata: null, error: action.payload };
    case USER_LOGOUT:
      return { ...state, token: null, loading: false, error: null };
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




export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        // reset any other authentication-related state properties
      };
    // handle other authentication-related actions as needed
    default:
      return state;
  }
}


export const userRegisterReducer = (state = { error: '' }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, error: '' };
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


export const usergetReducer = (state = { authData: null, loading: false, error: false }, action) => {


  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false }
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }

}


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};





export const localStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCALSTORAGE_DATA:
      return {
        ...state,
        storedData: action.payload,
      };
    default:
      return state;
  }
};



export const vitalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VITALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        vitals: null,
      };
    case FETCH_VITALS_SUCCESS:
      return {
        ...state,
        loading: false,
        vitals: action.payload,
      };
    case FETCH_VITALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const foodMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FOODMENU_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
        foodMenu: null,
      };
    case 'FETCH_FOODMENU_SUCCESS':
      return {
        ...state,
        loading: false,
        foodMenu: action.payload,
      };
    case 'FETCH_FOODMENU_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


