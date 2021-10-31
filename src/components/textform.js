import React, { Component } from "react";
import "../App.css";

import Array from "./array";

export default class Textform extends Component {
  state = {
    username: "",
    department: "",
    rating: 0,
    visible: false,
    details: [],
  };

  handleName = (ev) => {
    this.setState({ username: ev.target.value });
    // console.log(ev.target.value);
  };
  handleDept = (ev) => {
    this.setState({ department: ev.target.value });
    // console.log(ev.target.value);
  };
  handleRating = (ev) => {
    this.setState({ rating: ev.target.value });
    // console.log(ev.target.value);
  };
  handleForm = (ev) => {
    ev.preventDefault();
    const details = [...this.state.details];
    const detail = {
      id: details.length + 1,
      name: this.state.username,
      dept: this.state.department,
      rate: this.state.rating,
    };
    details.push(detail);
    console.log(details);

    this.setState({ details, username: "", department: "", rating: 0 });
    this.setState({ visible: true });
    console.log(details);
  };
  render() {
    console.log(this.state.details);
    return (
      <div>
        <h1 className="header">EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <span className="formSpan"> Name : </span>
          <label htmlFor="Name : ">
            <input
              type="text"
              onChange={this.handleName}
              value={this.state.username}
            />
          </label>{" "}
          <br /> <br />
          <span className="formSpan"> Department : </span>
          <label htmlFor="Department : ">
            <input
              type="text"
              onChange={this.handleDept}
              value={this.state.department}
            />
          </label>
          <br /> <br />
          <span className="formSpan">Rating : </span>
          <label htmlFor="Rating : ">
            <input
              type="number"
              onChange={this.handleRating}
              value={this.state.rating}
            />
          </label>
          <br /> <br />
          <button type="submit" onClick={this.handleForm}>
            submit
          </button>
        </form>
        {/* {this.state.visible ? <p>{this.state.username}</p> : <div></div>} */}

        <Array array={[...this.state.details]} />

        <div className="flex">
          {this.state.details.map((item) => {
            return (
              <div key={item.id}>
                <p> Name : {item.name}</p>
                <p>Department : {item.dept}</p>
                <p>Rating : {item.rate}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
