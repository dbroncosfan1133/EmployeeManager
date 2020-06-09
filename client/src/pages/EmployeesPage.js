import React from "react";
import MainHero from "../components/MainHero/MainHero";
import SearchBar from "../components/SearchBar/SearchBar";
import EmployeeTable from "../components/EmployeeTable/employeeTable";
import NewEmployeeBtn from "../components/NewEmployeeBtn/NewEmployeeBtn";

function EmployeesPage() {
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
            <div className="level-item">
              <NewEmployeeBtn />
            </div>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-12">
            <EmployeeTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeesPage;