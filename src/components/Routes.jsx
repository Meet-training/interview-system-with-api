import React, { lazy } from "react";
import { Card, Row, Col } from "antd";
import { Route, Switch } from "react-router-dom";
import InterviewResultForm from "./forms/InterviewResultForm";
import InterviewResultTable from "./table/InterviewResultTable";
import UserResultTable from "./table/UserListTable";
import UserForm from "./forms/UserForm";
import { ConnectedRouter } from "connected-react-router";
import LoginLayout from "./layout/LoginLayout";
import { Link, Redirect } from "react-router-dom";

const NoMatchPage = () => {
  return (
    <Row className="margin-top">
      <Col xs={{ span: 12, offset: 6 }}>
        <Card>
          <div className="card-body">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Page not found</h2>
              <Link to="/add-result">back to welcome</Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

const RestricatedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />;
};

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/result",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Routes = ({ history, isLoggedIn }) => {
  return (
    // <ConnectedRouter history={history}>
    <Switch>
      {/* <UnRestrictedRoute
        exact
        path="/"
        component={LoginLayout}
        isLoggedIn={true}
      /> */}
      <RestricatedRoute
        path="/result"
        component={InterviewResultTable}
        isLoggedIn={true}
      />
      <Route path="*" component={NoMatchPage} />
    </Switch>
    // </ConnectedRouter>
  );
};

// const Routes = () => {
//   return (
//     <>
//       <Switch>
//         <Route path="/result" component={InterviewResultTable} />
//         <Route path="/add-result" component={InterviewResultForm} />
//         <Route path="/users" component={UserResultTable} />
//         <Route path="/add-users" component={UserForm} />
//       </Switch>
//     </>
//   );
// };

export default Routes;
