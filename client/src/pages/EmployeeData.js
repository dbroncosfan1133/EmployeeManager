import React from "react";
import MainHero from "../components/MainHero/MainHero";
import API from "../utils/API";
import BackBtn from "../components/BackBtn/BackBtn";

class EmployeeData extends React.Component {
  state = {
    employeeDetail: []
  };

  componentDidMount() {
    API.getEmployeeDetails(this.props.match.params.id)
      .then(res => this.setState({ employeeDetail: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MainHero />
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="is-size-3">Employee Details</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <BackBtn />
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
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Term Date</th>
                    <th>Status</th>
                    <th>Shift</th>
                    <th>Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.full_name}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.address}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.city}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.state}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.zip_code}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.email_address}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.phone_number}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.position}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.department}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.start_date}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.end_date}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.employment_status}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.shift}
                    </div>
                  </td>
                  <td>
                    <div className="is-size-6">
                      {this.state.employeeDetail.manager}
                    </div>
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

export default EmployeeData;