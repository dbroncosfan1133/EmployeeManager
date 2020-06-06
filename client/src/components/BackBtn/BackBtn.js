import React from"react";
import { Link } from "react-router-dom";

class BackBtn extends React.Component {
    handleClick() {
        console.log("BackBtn Clicked");
    }
    render() {
        return (
            <div className="buttons">
                <Link to={"/"}>
                    <button className="button is-warning is-large" onClick={this.handleClick.bind(this)}>Go Back</button>
                </Link>
            </div>
        )
    }
}

export default BackBtn;