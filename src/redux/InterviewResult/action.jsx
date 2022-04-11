const actions = {
  CREATE_INTERVIEW_REPORT_REQUEST: "CREATE_INTERVIEW_REQUEST",
  CREATE_INTERVIEW_REPORT_SUCCESS: "CREATE_INTERVIEW_REPORT_SUCCESS",
  CREATE_INTERVIEW_REPORT_ERROR: "CREATE_INTERVIEW_REPORT_ERROR",

  GET_INTERVIEW_REPORT_REQUEST: "GET_INTERVIEW_REPORT_REQUEST",
  GET_INTERVIEW_REPORT_SUCCESS: "GET_INTERVIEW_REPORT_SUCCESS",
  GET_INTERVIEW_REPORT_ERROR: "GET_INTERVIEW_REPORT_ERROR",

  INTERVIEW_DETAIL_REQUEST: "INTERVIEW_DETAIL_REQUEST",
  INTERVIEW_DETAIL_SUCCESS: "INTERVIEW_DETAIL_SUCCESS",
  INTERVIEW_DETAIL_ERROR: "INTERVIEW_DETAIL_ERROR",
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
  interviewDetail: (id) => ({
    type: actions.INTERVIEW_DETAIL_REQUEST,
    id,
  }),

  /**
   * when detail report is successfull.
   */
  interviewDetailSuccess: (payload = {}) => ({
    type: actions.INTERVIEW_DETAIL_SUCCESS,
    payload,
  }),

  /**
   * when something went wrong with detail report.
   */
  interviewDetailFailure: (payload = "", errors = {}) => ({
    type: actions.INTERVIEW_DETAIL_ERROR,
    payload,
    errors,
  }),
};

export default actions;
