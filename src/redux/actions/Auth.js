import {
  SIGNIN,
  GET_ME,
  UPDATE_ME,
  UPDATE_PASSWORD,
  SIGNOUT,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  AUTH_TOKEN,
} from '../constants/Actions';
import JwtAuthService from 'services/JwtAuthService';
import UserService from 'services/UserService';
import { notification } from 'antd';



export const authenticated = values => (dispatch, getState) => {
  JwtAuthService.login(values).then(resp => {
    localStorage.setItem(AUTH_TOKEN, resp.token)
    dispatch({
      type: SIGNIN,
      token: resp.token,
      user: resp.user
    });
  }).catch(error => {
    if(error.response){
      dispatch({
        type: SHOW_AUTH_MESSAGE,
        message: error.response.data.message
      });
    }
    else{
      dispatch({
        type: SHOW_AUTH_MESSAGE,
        message: 'Something went wrong, please try again.'
      });
    }
    
  })
};

export const signUp = values => (dispatch, getState) => {
  JwtAuthService.signUp(values).then(resp => {
    localStorage.setItem(AUTH_TOKEN, resp.token)
    notification.success({ message: "Your account has been created successfully" })
    dispatch({
      type: SIGNIN,
      token: resp.token,
      user: resp.user
    });
  }).catch(error => {
    notification.error({
      message: error.response?.data.message || "Something went wrong, Please try again."
    })
  })
};

export const getMe = (endpoint) => (dispatch, getState) => {
  UserService.getMe(endpoint).then(resp => {
      const result = endpoint.substring(0, endpoint.length - 1);
      if(resp.status === 'success'){
          dispatch({
              type: GET_ME,
              user: resp[result]
          });
      }
  }).catch(error => {
      notification.error({
        message: error.response?.data.message || "Something went wrong, Please try again."
      })
  })
}

export const updateMe = (endpoint, data) => (dispatch, getState) => {
  UserService.updateMe(endpoint, data).then(resp => {
      const result = endpoint.substring(0, endpoint.length - 1);
      if(resp.status === 'success'){
        notification.success({ message: 'Your profile has been updated' })
          dispatch({
              type: UPDATE_ME,
              user: resp.user
            });
        }
  }).catch(error => {
    notification.error({
        message: error.response?.data.message || "Something went wrong, Please try again."
    })
  })
}

export const updatePassword = (data) => (dispatch, getState) => {
    UserService.updatePassword(data).then(resp => {
        if(resp.status === 'success'){
          notification.success({ message: 'Your password has been updated' })
            dispatch({
                type: UPDATE_PASSWORD,
                user: resp.user
              });
          }
    }).catch(error => {
      notification.error({
          message: error.response?.data.message || "Something went wrong, Please try again."
      })
    })
  }

export const signOut = () => {
    localStorage.removeItem(AUTH_TOKEN)
    return {
        type: SIGNOUT,
        token: null
    };
};

export const signUpSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    message
  };
};

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
