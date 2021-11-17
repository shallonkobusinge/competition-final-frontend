import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from './views/Login'
import AdminFrontPage from './views/AdminFrontPage'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

function PublicRoute({ children, ...rest }) {
  if (!sessionStorage.getItem("token")) {
    localStorage.removeItem("user");
  }
  return (
    <Route
      {...rest}
      render={() => {
        return !sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/records" />
        );
      }}
    />
  );
}
function App() {

  return (

    <Router>
      <Switch>

        <PublicRoute exact path="/">
          <Login />
        </PublicRoute>
        <PrivateRoute exact path='/records'>
          <AdminFrontPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
