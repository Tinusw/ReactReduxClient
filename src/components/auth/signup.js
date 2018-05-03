import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.authenticated === true) {
      this.props.history.push("/campaign/index");
    }
    return true;
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state);
  };

  renderError() {
    if (
      this.state.passwordConfirm !== "" &&
      this.state.password !== "" &&
      this.state.password !== this.state.passwordConfirm
    ) {
      return (
        <div className="error" id="error">
          passwords do not match :(
        </div>
      );
    }
  }

  render() {
    return (
      <form className="SignUp" onSubmit={this.handleSubmit}>
        <label>email</label>
        <input
          id="email"
          onChange={this.handleInputChange}
          name="email"
          type="text"
          autoComplete="email"
        />
        <label>password</label>
        <input
          id="password"
          onChange={this.handleInputChange}
          name="password"
          type="password"
        />
        <label>confirm password</label>
        <input
          id="passwordConfirm"
          onChange={this.handleInputChange}
          name="passwordConfirm"
          type="password"
        />
        <button>Sign Up</button>
        {this.renderError()}
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

export default connect(mapStateToProps, actions)(SignUp);
