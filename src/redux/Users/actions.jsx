const actions = {
  CREATE_USERS_REPORT_REQUEST: "CREATE_USERS_REQUEST",
  CREATE_USERS_REPORT_SUCCESS: "CREATE_USERS_REPORT_SUCCESS",
  CREATE_USERS_REPORT_ERROR: "CREATE_USERS_REPORT_ERROR",

  GET_USERS_REPORT_REQUEST: "GET_USERS_REPORT_REQUEST",
  GET_USERS_REPORT_SUCCESS: "GET_USERS_REPORT_SUCCESS",
  GET_USERS_REPORT_ERROR: "GET_USERS_REPORT_ERROR",

  USERS_DETAIL_REQUEST: "USERS_DETAIL_REQUEST",
  USERS_DETAIL_SUCCESS: "USERS_DETAIL_SUCCESS",
  USERS_DETAIL_ERROR: "USERS_DETAIL_ERROR",

  DELETE_USERS_DETAIL_REQUEST: "DELETE_USERS_DETAIL_REQUEST",
  DELETE_USERS_DETAIL_SUCCESS: "DELETE_USERS_DETAIL_SUCCESS",
  DELETE_USERS_DETAIL_ERROR: "DELETE_USERS_DETAIL_ERROR",
  /**
   * request to create Users result report.
   */
  createUsersReport: (queryParams) => ({
    type: actions.CREATE_USERS_REPORT_REQUEST,
    queryParams,
  }),

  /**
   * when create Users result report is successfull.
   */
  createUsersReportSuccess: (payload = {}) => ({
    type: actions.CREATE_USERS_REPORT_SUCCESS,
    payload,
  }),

  /**
   * when something went wrong with create Users result report.
   */
  createUsersReportFailure: (payload = "", errors = {}) => ({
    type: actions.CREATE_USERS_REPORT_ERROR,
    payload,
    errors,
  }),

  /**
   * request to get report.
   */
  getUsersReport: () => ({
    type: actions.GET_USERS_REPORT_REQUEST,
  }),

  getUsersReportSuccess: (payload = {}) => ({
    type: actions.GET_USERS_REPORT_SUCCESS,
    payload,
  }),

  getUsersReportFailure: (payload = "", errors = {}) => ({
    type: actions.GET_USERS_REPORT_ERROR,
    payload,
    errors,
  }),

  /**
   * request to deport.
   */
  usersDetail: (id) => ({
    type: actions.USERS_DETAIL_REQUEST,
    id,
  }),

  /**
   * when detail report is successfull.
   */
  usersDetailSuccess: (payload = {}) => ({
    type: actions.USERS_DETAIL_SUCCESS,
    payload,
  }),

  /**
   * when something went wrong with detail report.
   */
  usersDetailFailure: (payload = "", errors = {}) => ({
    type: actions.USERS_DETAIL_ERROR,
    payload,
    errors,
  }),

  /**
   * request delete .
   */
  deleteUsers: (id) => ({
    type: actions.DELETE_USERS_DETAIL_REQUEST,
    id,
  }),

  deleteUsersSuccess: (payload) => ({
    type: actions.DELETE_USERS_DETAIL_SUCCESS,
    payload,
  }),

  deleteUsersError: (payload = "", errors = {}) => ({
    type: actions.DELETE_USERS_DETAIL_ERROR,
    payload,
    errors,
  }),
};

export default actions;
