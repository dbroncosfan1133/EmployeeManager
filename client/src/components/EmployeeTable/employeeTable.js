import React from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn/DeleteBtn";
import API from "../../utils/API";

class EmployeesTable extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getAllEmployees();
    console.log(this.state);
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
                <Link to={"/employeedetails/" + employee._id}>
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
      </div >
    )
  }
}

export default EmployeesTable;