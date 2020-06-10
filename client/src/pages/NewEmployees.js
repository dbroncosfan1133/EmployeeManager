import React from "react";
import NewEmpHero from "../components/NewEmpHero/NewEmpHero";
import ClearFormBtn from "../components/ClearFormBtn/ClearFormBtn";
import { Input, FormBtn } from "../components/Form/Form";
import API from "../utils/API"

class NewEmployees extends React.Component {
  state = {
    legalName: "",
    address: "",
    city: "",
    st: "",
    zipCode: "",
    emailAddress: "",
    phoneNumber: "",
    position: "",
    department: "",
    startDate: "",
    employmentStatus: "",
    shift: "",
    manager: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.legalName && this.state.address && this.state.city && this.state.st && this.state.zipCode && this.state.emailAddress
      && this.state.phoneNumber && this.state.position && this.state.department && this.state.startDate && this.state.employmentStatus
      && this.state.shift && this.state.manager) {
      API.saveEmployee({
        legalName: this.state.legalName,
        address: this.state.address,
        city: this.state.city,
        st: this.state.st,
        zipCode: this.state.zipCode,
        emailAddress: this.state.emailAddress,
        phoneNumber: this.state.phoneNumber,
        position: this.state.position,
        department: this.state.department,
        startDate: this.state.startDate,
        employmentStatus: this.state.employmentStatus,
        shift: this.state.shift,
        manager: this.state.manager
      })
        .then(res => this.clearForm())
        .catch(err => console.log(err));
    }
  };

  clearForm = () => {
    this.setState({
      legalName: "",
      address: "",
      city: "",
      st: "",
      zipCode: "",
      emailAddress: "",
      phoneNumber: "",
      position: "",
      department: "",
      startDate: "",
      employmentStatus: "",
      shift: "",
      manager: ""
    });
  };

  render() {
    return (
      <div>
        <NewEmpHero />
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="is-size-3">Enter A New Employee</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-9">
              <form>
                <Input
                  value={this.state.legalName}
                  onChange={this.handleInputChange}
                  name="legalName"
                  placeholder="Employee Full Name"
                />
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                  placeholder="Street Address"
                />
                <Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                  placeholder="City"
                />
                <Input
                  value={this.state.st}
                  onChange={this.handleInputChange}
                  name="st"
                  placeholder="State"
                />
                <Input
                  value={this.state.zipCode}
                  onChange={this.handleInputChange}
                  name="zipCode"
                  placeholder="Zip Code"
                />
                <Input
                  value={this.state.emailAddress}
                  onChange={this.handleInputChange}
                  name="emailAddress"
                  placeholder="Email Address"
                />
                <Input
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                  name="phoneNumber"
                  placeholder="Phone Number"
                />
                <Input
                  value={this.state.position}
                  onChange={this.handleInputChange}
                  name="position"
                  placeholder="Position"
                />
                <Input
                  value={this.state.department}
                  onChange={this.handleInputChange}
                  name="department"
                  placeholder="Department"
                />
                <Input
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  name="startDate"
                  placeholder="Start Date"
                />
                <Input
                  value={this.state.employmentStatus}
                  onChange={this.handleInputChange}
                  name="employmentStatus"
                  placeholder="Status"
                />
                <Input
                  value={this.state.shift}
                  onChange={this.handleInputChange}
                  name="shift"
                  placeholder="Shift"
                />
                <Input
                  value={this.state.manager}
                  onChange={this.handleInputChange}
                  name="manager"
                  placeholder="Manager"
                />
                <div className="field is-grouped">
                  <p className="control">
                    <FormBtn
                      disabled={!(this.state.legalName && this.state.address && this.state.city && this.state.st
                        && this.state.zipCode && this.state.emailAddress &&
                        this.state.phoneNumber && this.state.position &&
                        this.state.department && this.state.employmentStatus && this.state.shift && this.state.manager)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                      </FormBtn>
                  </p>
                  <p className="control">
                    <ClearFormBtn />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewEmployees;