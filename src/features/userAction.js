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
} from "./constants/userConstants";
 // For example, navigate to the login page
import { useNavigate } from 'react-router-dom';
  
import axios from "axios";
import { URLDevelopment } from "../Urlhelper/Url";



export const login = (uhid, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URLDevelopment}login`,
      { uhid, password },
      config
    );

    if (data.message === "success") {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));

    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
  }
};


export const loginUser = (uhid, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${URLDevelopment}login`,
      { uhid, password },
      config
    );

    // Check the response message for success
    if (data.message === 'success') {
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data.token });

      // Store the token in local storage
      localStorage.setItem('token', data.token);
    } else {
      dispatch({ type: 'USER_LOGIN_FAIL', payload: 'Invalid uhid or password' });
    }
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};





export const logout = () => (dispatch) => {
  const navigate = useNavigate();
  // Perform any necessary cleanup or API calls if needed
  // ...

  // Dispatch the logout action
  dispatch({ type: USER_LOGOUT });

  // Clear the user information from localStorage
  localStorage.removeItem('userInfo');

  // Redirect or navigate to the desired page
 
   navigate('/login');
};

export const signup = (username, email, mobile, password) => async (dispatch) => {

  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URLDevelopment}register`,
      { username, email, mobile, password },
      config

    );


    if (data.message === 'success'){
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      // localStorage.setItem("token", data.token);
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    
    } else {
      throw new Error(data.message);
    }

  } catch (error){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    });

  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${URLDevelopment}users/profile`, user, config);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};