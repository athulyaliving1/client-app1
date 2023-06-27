import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
  userLogoutReducer,
  userReducer,
  localStorageReducer,
  vitalsReducer,
  foodMenuReducer,
  authReducer
} from "./features/reducers/userReducers.js";



const reducer = combineReducers({
 
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer, // 
  userUpdate: userUpdateReducer,
  user: userReducer,
  localStorage: localStorageReducer,
  vitals: vitalsReducer,
  foodMenu: foodMenuReducer,
  auth: authReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;