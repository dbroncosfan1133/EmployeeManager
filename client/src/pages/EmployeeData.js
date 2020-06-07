import React from "react";
import MainHero from "../components/MainHero/MainHero";
import BackBtn from "../components/BackBtn/BackBtn";
import API from "../utils/API";

class EmployeeDetails extends React.Component {
  state = {
    details: []
  };

  componentDidMount() {
    API.getEmployeeDetails(this.props.match.params.id)
      .then(res => this.setState({ employee: res.data }))
      .then(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MainHero />
        <div className="container mainContain">
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
              <div className="card">
                <div className="card-body">
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
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeDetails;