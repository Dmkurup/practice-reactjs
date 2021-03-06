import React from "react";
const Input = (props) => {
  const { name, label, onChange ,value,error,type} = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
    { error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
