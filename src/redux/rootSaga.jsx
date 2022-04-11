import { all } from "redux-saga/effects";
import authSaga from "./Auth/saga";
import interviewSaga from "./InterviewResult/saga";
import userSaga from "./Users/saga";

export default function* rootSaga() {
  yield all([authSaga(), interviewSaga(), userSaga()]);
}
