import React from "react";
import MainHero from "../components/MainHero/MainHero";
import BackBtn from "../components/BackBtn/BackBtn";

class EmployeeDetails extends React.Component {
    state = {
        details: {}
    };


    render() {
        return (
            <div>
                <MainHero />
                <div className="container mainContain"></div>
                <BackBtn />
            </div>
        )
    }
}

export default EmployeeDetails;