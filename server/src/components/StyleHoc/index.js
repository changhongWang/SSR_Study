import React, { Component } from "react";

export default function StyleHoc(WrapComponent, styles) {
  return class extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.homeStyle = styles._getCss();
      }
    }
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
}
