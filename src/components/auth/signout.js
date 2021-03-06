import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class SignOut extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div className="Signout">Signed Out</div>;
  }
}

export default connect(null, actions)(SignOut);
