import React from "react";
import { Link } from "react-router-dom";

class NewEmployeeBtn extends React.Component {
    handleClick() {
        console.log('Clicked');
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/newemployee"}>
                    <button className="button is-info is-large" onClick={this.handleClick.bind(this)}>Add Employee</button>
                </Link>
            </div>
        )
    }
}

export default NewEmployeeBtn;