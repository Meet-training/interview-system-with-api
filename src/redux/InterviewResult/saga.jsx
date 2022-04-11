import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./action";
import { axiosGet, axiosPost } from "../axioshelper";
import { push } from "connected-react-router";

/**
 * Request to create Interview Result report.
 */
export function* createInterviewReport({ queryParams }) {
  try {
    const { data } = yield axiosPost(queryParams, `submitInterView`);
    console.log("data", data);
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
 * Request to detail interview report.
 */
export function* interviewDetail({ id }) {
  try {
    const { data } = yield axiosGet(`member/${id}`);
    yield put(actions.interviewDetailSuccess(data));
  } catch (error) {
    yield put(actions.interviewDetailFailure(error.message, error.data || {}));
  }
}
export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_INTERVIEW_REPORT_REQUEST, createInterviewReport),
  ]);
  yield all([
    takeEvery(actions.GET_INTERVIEW_REPORT_REQUEST, getInterviewReport),
  ]);
  yield all([takeEvery(actions.INTERVIEW_DETAIL_REQUEST, interviewDetail)]);
}
