import React from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import { useSelector } from "react-redux";
import InterviewResultTable from "../table/InterviewResultTable";
import InterviewResultForm from "../forms/InterviewResultForm";
import UserResultTable from "../table/UserListTable";
import UserForm from "../forms/UserForm";

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <>
          <Component {...props} />
        </>
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

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <>
            <div>
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Component {...props} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.token !== null);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <Switch>
      <UnRestrictedRoute
        exact
        path="/"
        component={LoginLayout}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/result"
        component={InterviewResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/resultform"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/users"
        component={UserResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        path="/userform"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
    </Switch>
  );
};

export default Layout;

// const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isLoggedIn ? (
//         <>
//           <Component {...props} />
//         </>
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/result",
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// );
// const RestricatedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLoggedIn ? (
//           <>
//             <div>
//               <Sidebar {...props} />
//               <div className="layout__content">
//                 <TopNav />
//                 <div className="layout__content-main">
//                   <Component {...props} />
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };
// const Layout = () => {
//   const isLoggedIn = useSelector((state) => state.auth.tokan !== null);

//   // console.log("isLoggedIn", isLoggedIn);
//   return (
//     <Switch>
//       <UnRestrictedRoute
//         exact
//         path="/"
//         component={LoginLayout}
//         isLoggedIn={isLoggedIn}
//       />
//       <RestricatedRoute
//         path="/result"
//         component={InterviewResultTable}
//         isLoggedIn={isLoggedIn}
//       />
//       <RestricatedRoute
//         path="/add-result"
//         component={InterviewResultForm}
//         isLoggedIn={isLoggedIn}
//       />
//       <RestricatedRoute
//         path="/users"
//         component={UserResultTable}
//         isLoggedIn={isLoggedIn}
//       />
//       <RestricatedRoute
//         path="/add-users"
//         component={UserForm}
//         isLoggedIn={isLoggedIn}
//       />
//     </Switch>
//   );
// };
