import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./actions";
import { axiosGet, axiosPost, axiosPut, axiosDelete } from "../axioshelper";
import { push } from "connected-react-router";

/**
 * Request to create Users report.
 */
export function* createUsersReport({ queryParams }) {
  try {
    const { data } = yield axiosPost(queryParams, `register`);
    yield put(actions.createUsersReportSuccess(data));
    yield put(actions.getUsersReport());
    // yield put(actions.getAllUsersReport());
    yield put(push("/users"));
  } catch (error) {
    yield put(
      actions.createUsersReportFailure(error.message, error.data || {})
    );
  }
}

/**
 * Request to get all Users.
 *
 */
export function* getUsersReport() {
  try {
    const { data } = yield axiosGet(`getAllUsersDetails`);
    yield put(actions.getUsersReportSuccess(data));
  } catch (error) {
    yield put(actions.getUsersReportFailure(error.message, error.data || {}));
  }
}

/**
 * Request to detail of single users report.
 */
export function* getSingleUsersReport({ id }) {
  try {
    const { data } = yield axiosGet(`getUserDetails/${id}`);
    yield put(actions.getSingleUsersSuccess(data));
  } catch (error) {
    yield put(actions.getSingleUsersFailure(error.message, error.data || {}));
  }
}

/**
 * Request to update detail of users report.
 */

export function* updateUserReport({ payload, id }) {
  try {
    const { data } = yield axiosPut(payload, `updateUserDetails/${id}`);
    yield put(actions.updateUsersDetailSuccess(data));
    yield put(push("/users"));
  } catch (error) {
    yield put(
      actions.updateUsersDetailFailure(error.message, error.data || {})
    );
  }
}

/**
 * Request to delete detail of users report.
 */

export function* deleteUserReport({ id }) {
  const { data } = yield axiosDelete(`deleteUser/${id}`);
  yield put(actions.getUsersReport(data));
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CREATE_USERS_REPORT_REQUEST, createUsersReport),
    takeEvery(actions.GET_USERS_REPORT_REQUEST, getUsersReport),
    takeEvery(actions.GET_SINGLE_USERS_REQUEST, getSingleUsersReport),
    takeEvery(actions.UPDATE_USERS_DETAIL_REQUEST, updateUserReport),
    takeEvery(actions.DELETE_USERS_DETAIL_REQUEST, deleteUserReport),
  ]);
}
