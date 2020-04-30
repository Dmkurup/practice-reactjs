import React, { Component } from "react";
import { genres } from "../../services/fakeGenreService";

class ListGroup extends Component {
  render() {
    const { items, onItemSelect, textProperty, valueProperty } = this.props;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className="list-group-item"
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps={
  textProperty:"name",
  valueProperty:"_id"
}

export default ListGroup;
