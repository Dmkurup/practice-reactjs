import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import auth from "./../services/authService";

class LoginForm extends Form {
  username = React.createRef();

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const {state}=this.props.location;
      window.location=state? state.from.pathname:"/"
      //window.location = "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {/* <Input
            name="username"
            label="Username"
            onChange={this.handleChange}
            value={data.username}
            error={errors.username}
          /> */}
          {/* <Input
            name="password"
            label="Password"
            onChange={this.handleChange}
            value={data.password}
            error={errors.password}
          /> */}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
