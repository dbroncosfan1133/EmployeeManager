import React from "react";
import MainHero from "../components/MainHero/MainHero";
import SearchBar from "../components/SearchBar/SearchBar";

class EmployeesPage extends React.Component {
  state = {
    employees: []
  };

  render() {
    return (
      <div>
        <MainHero />
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="is-size-3">Employee Database</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <SearchBar />
              </div>
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-12">
              <table className="table is-bordered is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Position Held</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Term Date</th>
                    <th>Employment Status</th>
                    <th>Shift</th>
                    <th>Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <td>

                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeesPage