import { all, takeEvery, put, takeLatest } from "redux-saga/effects";
import actions from "./action";
import { axiosGet, axiosPost, axiosDelete, axiosPut } from "../axioshelper";
import { push } from "connected-react-router";

/**
 * Request to create Interview Result report.
 */
export function* createInterviewReport({ queryParams }) {
  try {
    const { data } = yield axiosPost(queryParams, `submitInterView`);
    // console.log("data", data);
    yield put(actions.createInterviewReportSuccess(data));
    yield put(actions.getInterviewReport());
    yield put(push("/result"));
  } catch (error) {
    yield put(
      actions.createInterviewReportFailure(error.message, error.data || {})
    );
  }
}

/**
 * get all Interview Result.
 *
 */
export function* getInterviewReport() {
  try {
    const { data } = yield axiosGet(`getAllInterViewResultDetails`);
    yield put(actions.getInterviewReportSuccess(data));
  } catch (error) {
    yield put(
      actions.getInterviewReportFailure(error.message, error.data || {})
    );
  }
}

/**
 * Request to get single detail of interview result.
 */
export function* getSingleInterviewResultData({ id }) {
  console.log("userid", id);
  try {
    const { data } = yield axiosGet(`getInterViewResultDetails/${id}`);
    yield put(actions.getSingleInterviewResultSuccess(data));
  } catch (error) {
    yield put(
      actions.getSingleInterviewResultFailure(error.message, error.data || {})
    );
  }
}

/**
 * Request to delete interview result.
 */

export function* deleteInterviewResult({ id }) {
  // console.log("id", id);
  const { data } = yield axiosDelete(`deleteInterViewResult/${id}`);
  yield put(actions.getInterviewReport(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_INTERVIEW_REPORT_REQUEST, createInterviewReport),
    takeEvery(actions.GET_INTERVIEW_REPORT_REQUEST, getInterviewReport),
    takeEvery(
      actions.GET_SINGLE_INTERVIEW_RESULT_REQUEST,
      getSingleInterviewResultData
    ),
    takeEvery(actions.DELETE_INTERVIEW_DETAIL_REQUEST, deleteInterviewResult),
  ]);
}
