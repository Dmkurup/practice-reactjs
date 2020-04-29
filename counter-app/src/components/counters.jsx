import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset={onReset}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
