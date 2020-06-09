import React from "react";
import MainHero from "../components/MainHero/MainHero";
import ClearFormBtn from "../components/ClearFormBtn/ClearFormBtn";
import BackBtn from "../components/BackBtn/BackBtn";
import { Input, FormBtn } from "../components/Form/Form";
import API from "../utils/API";

class NewEmployees extends React.Component {
  state = {
    full_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    email_address: "",
    phone_number: "",
    position: "",
    department: "",
    start_date: "",
    end_date: "",
    employment_status: "",
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
    if (this.state.full_name && this.state.address && this.state.city && this.state.state && this.state.zip_code && this.state.email_address
      && this.state.phone_number && this.state.position && this.state.department && this.state.start_date && this.state.end_date && this.state.employment_status
      && this.state.shift && this.state.manager) {
      API.saveEmployee({
        full_name: this.state.full_name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        email_address: this.state.email_address,
        phone_number: this.state.phone_number,
        position: this.state.position,
        department: this.state.department,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        employment_status: this.state.employment_status,
        shift: this.state.state,
        manager: this.state.manager
      })
        .then(res => this.clearForm())
        .catch(err => console.log(err));
    }
  };

  clearForm = () => {
    this.setState({
      full_name: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      email_address: "",
      phone_number: "",
      position: "",
      department: "",
      start_date: "",
      end_date: "",
      employment_status: "",
      shift: "",
      manager: ""
    });
  };

  render() {
    return (
      <div>
        <MainHero />
        <BackBtn />
        <div className="container">
          <h1 className="is-size-3">Enter New Employee</h1>
          <hr />
          <div className="columns">
            <div className="column is-9">
              <form>
                <Input
                  value={this.state.full_name}
                  onChange={this.handleInputChange}
                  name="full_name"
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
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  name="state"
                  placeholder="State"
                />
                <Input
                  value={this.state.zip_code}
                  onChange={this.handleInputChange}
                  name="zip_code"
                  placeholder="Zip Code"
                />
                <Input
                  value={this.state.email_address}
                  onChange={this.handleInputChange}
                  name="email_address"
                  placeholder="Email Address"
                />
                <Input
                  value={this.state.phone_number}
                  onChange={this.handleInputChange}
                  name="phone_number"
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
                  value={this.state.start_date}
                  onChange={this.handleInputChange}
                  name="start_date"
                  placeholder="Start Date"
                />
                <Input
                  value={this.state.end_date}
                  onChange={this.handleInputChange}
                  name="end_date"
                  placeholder="End Date"
                />
                <Input
                  value={this.state.employment_status}
                  onChange={this.handleInputChange}
                  name="employment_status"
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
                      disabled={!(this.state.full_name && this.state.address && this.state.city && this.state.state
                        && this.state.zip_code && this.state.email_address &&
                        this.state.phone_number && this.state.position &&
                        this.state.department && this.state.employment_status && this.state.shift && this.state.manager)}
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