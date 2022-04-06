import React from "react";
import { Route, Switch } from "react-router-dom";
import InterviewResultForm from "./forms/InterviewResultForm";
import InterviewResultTable from "./table/InterviewResultTable";
import UserResultTable from "./table/UserListTable";
import UserForm from "./forms/UserForm";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/interview-result" component={InterviewResultTable} />
        <Route path="/add-result" component={InterviewResultForm} />
        <Route path="/users" component={UserResultTable} />
        <Route path="/add-users" component={UserForm} />
      </Switch>
    </>
  );
};

export default Routes;
