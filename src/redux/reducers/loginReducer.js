import { ActionTypes } from "../constants/action-types";
const initialState = {
  userName: null,
  password: null,
  isLoggedIn: false,
};

export const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGNUP:
      return {
        ...state,
        userName: payload.userName,
        password: payload.password,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGOUT:
      return {
        ...state,
        userName: null,
        password: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
