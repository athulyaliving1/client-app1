import {

  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  FETCH_VITALS_FAILURE,
  FETCH_VITALS_SUCCESS,
} from "./constants/userConstants";
// For example, navigate to the login page


import axios from "axios";
import { URLDevelopment } from "../Urlhelper/Url";



// export const login = (uhid, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST });

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       `${URLDevelopment}login`,
//       { uhid, password },
//       config
//     );

//     if (data.message === "success") {
//       dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
//       localStorage.setItem("userInfo", JSON.stringify(data));

//     } else {
//       throw new Error(data.message);
//     }
//   } catch (error) {

//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


export const login = (uhid, password) => async (dispatch) => {
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
      dispatch({
        type: 'USER_LOGIN_SUCCESS', payload: {
          token: data.token,
          uhid: data.uhid,
          message: 'success',
        }
      });

      // Store the token in local storage
      // localStorage.setItem('token', data.token);
      localStorage.setItem("userdata", JSON.stringify(data));


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



// userActions.js

export const logout = () => {
  return (dispatch) => {
    // Clear local storage
    localStorage.clear();

    // Dispatch an action to update the authentication state
    dispatch({ type: 'USER_LOGOUT' });

    // Navigate to the login page (assuming you have a route named '/login')
    // You can use react-router's history or any other navigation method
    // history.push('/login');
  };
};


export const signup = (uhid, email, mobile, password) => async (dispatch) => {

  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${URLDevelopment}register`,
      { uhid, email, mobile, password },
      config

    );


    if (data.message === 'success') {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      // localStorage.setItem("token", data.token);

      localStorage.setItem("userInfo", JSON.stringify(data));

    } else {
      throw new Error(data.message);
    }

  } catch (error) {
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



export const fetchUserDataRequest = () => ({
  type: FETCH_USER_DATA_REQUEST,
});

export const fetchUserDataSuccess = (userData) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: userData,
});

export const fetchUserDataFailure = (error) => ({
  type: FETCH_USER_DATA_FAILURE,
  payload: error,
});



export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(fetchUserDataRequest());

    try {
      // Get user ID from local storage data
      const localStorageData = JSON.parse(localStorage.getItem('userdata'));
      const userId = localStorageData.userdata.id;

      // Make API request with the user ID
      const response = await axios.get(`http://localhost:8081/users/${userId}`);
      const userData = response.data.response[0];
      dispatch(fetchUserDataSuccess(userData));
    } catch (error) {
      dispatch(fetchUserDataFailure(error.message));
    }
  };
};



export const fetchVitals = (id) => {
  return async (dispatch) => {
    try {
      const localStorageData = JSON.parse(localStorage.getItem('userdata'));
      // const token = localStorageData.token;
      const userId = localStorageData.userdata.id;

      // Set the Authorization header with the JWT token
      // const headers = {
      //   Authorization: token,
      // };

      // Make the API request to fetch vitals data using the user ID
      const response = await axios.get(`http://localhost:8081/clientsvitals/${userId}`);
      // const vitalsData = response.data.response[0];
      const vitalsData = response.data.response;

      dispatch({ type: FETCH_VITALS_SUCCESS, payload: vitalsData });
    } catch (error) {
      dispatch({ type: FETCH_VITALS_FAILURE, payload: error.message });
    }
  };
};



export const fetchFoodMenuRequest = () => {
  return {
    type: 'FETCH_FOODMENU_REQUEST',
  };
};

export const fetchFoodMenuSuccess = (foodMenu) => {
  return {
    type: 'FETCH_FOODMENU_SUCCESS',
    payload: foodMenu,
  };
};

export const fetchFoodMenuFailure = (error) => {
  return {
    type: 'FETCH_FOODMENU_FAILURE',
    payload: error,
  };
};

export const fetchFoodMenu = () => {
  return (dispatch) => {
    dispatch(fetchFoodMenuRequest());

    axios.get(`http://localhost:8081/clientsvitals/85`)
      .then((response) => {
        const foodMenu = response.data.response;
        dispatch(fetchFoodMenuSuccess(foodMenu));
      })
      .catch((error) => {
        dispatch(fetchFoodMenuFailure(error.message));
      });
  };
};