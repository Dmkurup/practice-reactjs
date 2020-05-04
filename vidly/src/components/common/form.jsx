import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../../components/input";
import Select from "../../components/select";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);
    console.log('Result',result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    console.log('Errors',errors);
    return errors;
  };

  validateProperty = (input) => {
    const obj = { [input.name]: input.value }; //{username:abcd}
    const schema = { [input.name]: this.schema[input.name] };
    const result = Joi.validate(obj, schema);
   // console.log(result);
    if (!result.error) return null;
    return result.error.details[0].message;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    //call server
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };


  renderButton =(label)=>{
   return  <button disabled={this.validate()} className="btn btn-primary">
    {label}
  </button>
  }


  renderInput=(name,label,type="text")=>{
    const { data, errors } = this.state;
      return <Input
      name={name}
      label={label}
      type={type}
      onChange={this.handleChange}
      value={data[name]}
      error={errors && errors[name]}
    />
  }


  renderSelect=(name,label,options)=>{
    const { data,errors } = this.state;
      return <Select
      value={data[name]}
      name={name}
      label={label}
      options={options}
      onChange={this.handleChange}
      error={errors && errors[name]}
    />
  }
}

export default Form;
