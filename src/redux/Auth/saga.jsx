import { all, takeEvery, put } from "redux-saga/effects";
import actions from "./action";
import { axiosPost } from "../axioshelper";
import { push } from "connected-react-router";
import { getToken, clearToken } from "../../Helper/utility";
export function* loginRequest({ payload }) {
  try {
    const { data } = yield axiosPost(payload, `login`);
    console.log("data:", data);
    let { token } = data.data;
    if (token) {
      yield localStorage.setItem("auth_token", token);
      yield localStorage.setItem("user", JSON.stringify(data.data));
      yield put(actions.loginSuccess(data.data.user, token));
      yield put(push("/result"));
    } else {
      throw new Error("Invalid credentials provided.");
    }
    yield put(actions.loginSuccess(data));
  } catch (error) {
    yield put(actions.loginFailure(error.message, error.data || {}));
  }
}

export function* logout() {
  try {
    yield localStorage.removeItem("auth_token");
    yield localStorage.removeItem("user");
    yield put(actions.logoutSuccess());
    yield put(push("/"));
  } catch (error) {
    yield put(actions.logoutError());
  }
}

/**
 * check if authenticated user access.
 *
 */
export function* checkAuthorization() {
  // const token = getToken().get('auth_token');
  const token = localStorage.getItem("auth_token");
  const user = getToken().get("user");
  if (token) {
    yield put(actions.loginSuccess(user, token));
  } else {
    clearToken();
    yield put(push("/"));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHECK_AUTHORIZATION, checkAuthorization),
    takeEvery(actions.LOGIN_REQUEST, loginRequest),
    takeEvery(actions.LOGOUT_REQUEST, logout),
  ]);
}
