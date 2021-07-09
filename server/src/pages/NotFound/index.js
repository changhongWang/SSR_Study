import React, { Component } from "react";

class NotFound extends Component {
  componentWillMount() {
    this.props.staticContext && (this.props.staticContext.NOT_FOUND = true);
  }
  render() {
    return <div>404, Not Found</div>;
  }
}
export default NotFound;
