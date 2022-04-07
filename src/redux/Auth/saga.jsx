import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./action";
import { axiosPost } from "../axioshelper";
import { push } from "connected-react-router";
// import { getToken, clearToken } from '../../helper/utility';

/**
 * Call to login.
 *
 */
export function* loginRequest({ payload }) {
  try {
    const { data } = yield axiosPost(payload, `login`);
    let { token } = data.data;
    if (token) {
      yield localStorage.setItem("auth_token", token);
      yield localStorage.setItem("user", JSON.stringify(data.data));
      yield put(actions.loginSuccess(data.data, token));
      yield put(push("/result"));
    } else {
      throw new Error("Invalid credentials provided.");
    }
    // yield put(actions.loginSuccess(data));
  } catch (error) {
    yield put(actions.loginFailure(error.message, error.data || {}));
  }
}

export default function* rootSaga() {
  yield all([
    // takeEvery(actions.CHECK_AUTHORIZATION, checkAuthorization),
    takeEvery(actions.LOGIN_REQUEST, loginRequest),
    // takeEvery(actions.LOGOUT_REQUEST, logout)
  ]);
}
