import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class SignIn extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.authenticated === true) {
      this.props.history.push("/campaign/index");
    }
    return true;
  }

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signinUser(this.state);
  };

  render() {
    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <label>email</label>
        <input
          id="email"
          onChange={this.handleInputChange}
          name="email"
          type="text"
        />
        <label>password</label>
        <input
          id="password"
          onChange={this.handleInputChange}
          name="password"
          type="text"
        />
        <button>Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(SignIn);
