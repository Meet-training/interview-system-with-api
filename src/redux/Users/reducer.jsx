import actions from "./actions";

const initialState = {
  users: {},
  UsersTable: [],
  UsersDetails: {},
  errorData: {},
  action: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_USERS_REPORT_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        loading: true,
        action: action.type,
      };
    case actions.CREATE_USERS_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        loading: false,
        action: action.type,
      };
    case actions.CREATE_USERS_REPORT_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        loading: false,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.GET_USERS_REPORT_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type,
      };
    case actions.GET_USERS_REPORT_SUCCESS:
      return {
        ...state,
        UsersTable: action.payload.data,
        action: action.type,
      };
    case actions.GET_USERS_REPORT_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.USERS_DETAIL_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        id: "",
        action: action.type,
      };
    case actions.USERS_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        UsersDetails: action.payload.data,
        action: action.type,
      };
    case actions.USERS_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        errorData: action.errors || {},
        action: action.type,
      };
    default:
      return state;
  }
};