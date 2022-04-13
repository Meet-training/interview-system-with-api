const actions = {
  CREATE_INTERVIEW_REPORT_REQUEST: "CREATE_INTERVIEW_REQUEST",
  CREATE_INTERVIEW_REPORT_SUCCESS: "CREATE_INTERVIEW_REPORT_SUCCESS",
  CREATE_INTERVIEW_REPORT_ERROR: "CREATE_INTERVIEW_REPORT_ERROR",

  GET_INTERVIEW_REPORT_REQUEST: "GET_INTERVIEW_REPORT_REQUEST",
  GET_INTERVIEW_REPORT_SUCCESS: "GET_INTERVIEW_REPORT_SUCCESS",
  GET_INTERVIEW_REPORT_ERROR: "GET_INTERVIEW_REPORT_ERROR",

  GET_SINGLE_INTERVIEW_RESULT_REQUEST: "GET_SINGLE_INTERVIEW_RESULT_REQUEST",
  GET_SINGLE_INTERVIEW_RESULT_SUCCESS: "GET_SINGLE_INTERVIEW_RESULT_SUCCESS",
  GET_SINGLE_INTERVIEW_RESULT_ERROR: "GET_SINGLE_INTERVIEW_RESULT_ERROR",

  UPDATE_INTERVIEW_DETIAL_REQUEST: "UPDATE_INTERVIEW_DETIAL_REQUEST",
  UPDATE_INTERVIEW_DETIAL_SUCCESS: "UPDATE_INTERVIEW_DETIAL_SUCCESS",
  UPDATE_INTERVIEW_DETIAL_ERROR: "UPDATE_INTERVIEW_DETIAL_ERROR",

  DELETE_INTERVIEW_DETAIL_REQUEST: "DELETE_INTERVIEW_DETAIL_REQUEST",
  DELETE_INTERVIEW_DETAIL_SUCCESS: "DELETE_INTERVIEW_DETAIL_SUCCESS",
  DELETE_INTERVIEW_DETAIL_ERROR: "DELETE_INTERVIEW_DETAIL_ERROR",

  /**
   * request to create interview result report.
   */
  createInterviewReport: (queryParams) => ({
    type: actions.CREATE_INTERVIEW_REPORT_REQUEST,
    queryParams,
  }),

  /**
   * when create interview result report is successfull.
   */
  createInterviewReportSuccess: (payload = {}) => ({
    type: actions.CREATE_INTERVIEW_REPORT_SUCCESS,
    payload,
  }),

  /**
   * when something went wrong with create interview result report.
   */
  createInterviewReportFailure: (payload = "", errors = {}) => ({
    type: actions.CREATE_INTERVIEW_REPORT_ERROR,
    payload,
    errors,
  }),

  /**
   * request to get report.
   */
  getInterviewReport: () => ({
    type: actions.GET_INTERVIEW_REPORT_REQUEST,
  }),

  getInterviewReportSuccess: (payload = {}) => ({
    type: actions.GET_INTERVIEW_REPORT_SUCCESS,
    payload,
  }),

  getInterviewReportFailure: (payload = "", errors = {}) => ({
    type: actions.GET_INTERVIEW_REPORT_ERROR,
    payload,
    errors,
  }),

  /**
   * request to deport.
   */
  getSingleInterviewResultRequest: (id) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_REQUEST,
    id,
  }),

  getSingleInterviewResultSuccess: (payload = {}) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_SUCCESS,
    payload,
  }),

  getSingleInterviewResultFailure: (payload = "", errors = {}) => ({
    type: actions.GET_SINGLE_INTERVIEW_RESULT_ERROR,
    payload,
    errors,
  }),

  /**
   * request update .
   */

  updateInterviewResult: (id) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_REQUEST,
    id,
  }),

  updateInterviewResultSuccess: (payload = {}) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_SUCCESS,
    payload,
  }),

  updateInterviewResultFailure: (payload = "", errors = {}) => ({
    type: actions.UPDATE_INTERVIEW_DETIAL_ERROR,
    payload,
    errors,
  }),

  /**
   * request delete .
   */
  deleteInterviewResult: (id) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_REQUEST,
    id,
  }),

  deleteInterviewResultSuccess: (payload) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_SUCCESS,
    payload,
  }),

  deleteInterviewResultError: (payload = "", errors = {}) => ({
    type: actions.DELETE_INTERVIEW_DETAIL_ERROR,
    payload,
    errors,
  }),
};

export default actions;
