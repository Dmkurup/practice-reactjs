import React, { Component } from "react";

class Counter extends Component {
  //arrow functions works as binding function for this keyword
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { counter, onDelete, onIncrement, onReset, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          {" "}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {" "}
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(this.props.counter)}
            disabled={this.props.counter.value===0?"disable":""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
           Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
