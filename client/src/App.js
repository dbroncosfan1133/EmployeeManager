import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeData from "./pages/EmployeeData";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={EmployeesPage} />
          <Route exact path="/employeedetails" component={EmployeeData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
