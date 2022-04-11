import actions from "./action";

const initialState = {
  candidate: {},
  InterviewResultTable: [],
  InterviewResultDetails: {},
  errorData: {},
  action: null,
};

export default (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case actions.CREATE_INTERVIEW_REPORT_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        loading: true,
        action: action.type,
      };
    case actions.CREATE_INTERVIEW_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        candidate: action.payload,
        loading: false,
        action: action.type,
      };
    case actions.CREATE_INTERVIEW_REPORT_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload,
        loading: false,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.GET_INTERVIEW_REPORT_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type,
      };
    case actions.GET_INTERVIEW_REPORT_SUCCESS:
      return {
        ...state,
        InterviewResultTable: action.payload.data,
        action: action.type,
      };
    case actions.GET_INTERVIEW_REPORT_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type,
      };
    case actions.INTERVIEW_DETAIL_REQUEST:
      return {
        ...state,
        errorData: {},
        loading: true,
        message: null,
        id: "",
        action: action.type,
      };
    case actions.INTERVIEW_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        InterviewResultDetails: action.payload.data,
        action: action.type,
      };
    case actions.INTERVIEW_DETAIL_ERROR:
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
