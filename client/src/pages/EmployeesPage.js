import React from "react";
import MainHero from "../components/MainHero/MainHero";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";

class EmployeesPage extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees = () => {
    API.getEmployees()
      .then(res =>
        this.setState({ employees: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteEmployees = id => {
    API.deleteEmployee(id)
      .then(res => this.getAllEmployees())
      .catch(err => console.log(err));
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
                    <th>Position</th>
                    <th>Department</th>
                    <th>Shift</th>
                    <th>Employment Status</th>
                    <th>Delete Employee</th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    {this.state.employees.map(employee => (
                      <Link to={"/details/" + employee._id}>
                        <div className="is-size-5">
                          {employee.full_name}
                        </div>
                      </Link>
                    ))}
                  </td>
                  <td>
                    {this.state.employees.map(employee => (
                      <div className="is-size-5">
                        {employee.position}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.employees.map(employee => (
                      <div className="is-size-5">
                        {employee.department}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.employees.map(employee => (
                      <div className="is-size-5">
                        {employee.shift}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.employees.map(employee => (
                      <div className="is-size-5">
                        {employee.employment_status}
                      </div>
                    ))}
                  </td>
                  <td>
                    {this.state.employees.map(employee => (
                      <div>
                        <DeleteBtn onClick={() => this.deleteEmployee(employee._id)} />
                      </div>
                    ))}
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