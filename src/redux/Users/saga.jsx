import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import { axiosGet, axiosPost } from "../axioshelper";
import { push } from "connected-react-router";

/**
 * Request to create Users report.
 */
export function* createUsersReport({ queryParams }) {
  try {
    const { data } = yield axiosPost(queryParams, `member/create`);
    yield put(actions.createUsersReportSuccess(data));
    yield put(push("/members"));
  } catch (error) {
    yield put(
      actions.createUsersReportFailure(error.message, error.data || {})
    );
  }
}

/**
 * get all Users.
 *
 */
export function* getUsersReport() {
  try {
    const { data } = yield axiosGet(`member`);
    yield put(actions.getUsersReportSuccess(data));
  } catch (error) {
    yield put(actions.getUsersReportFailure(error.message, error.data || {}));
  }
}

/**
 * Request to detail users report.
 */
export function* usersDetail({ id }) {
  try {
    const { data } = yield axiosGet(`member/${id}`);
    yield put(actions.usersDetailSuccess(data));
  } catch (error) {
    yield put(actions.usersDetailFailure(error.message, error.data || {}));
  }
}
export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_USERS_REPORT_REQUEST, createUsersReport),
  ]);
  yield all([takeEvery(actions.GET_USERS_REPORT_REQUEST, getUsersReport)]);
  yield all([takeEvery(actions.USERS_DETAIL_REQUEST, usersDetail)]);
}
