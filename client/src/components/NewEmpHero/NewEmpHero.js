import React from "react";
import BackBtn from "../BackBtn/BackBtn";

function NewEmpHero() {
  return (
    <div className="hero is-success is-bold">
      <div className="hero-body">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">HR Employee Database</h1>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <BackBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEmpHero;