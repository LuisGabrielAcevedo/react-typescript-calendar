import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from "src/componentes/auth/LoginScreen";
import CalendarScreen from "src/componentes/calendar/CalendarScreen";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen}></Route>
        <Route exact path="/" component={CalendarScreen}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

export default AppRouter;
