import React from "react";
import FadeIn from '../components/fadeIn';
export default function connectRoute(WrappedComponent) {
  return class ConnectRoute extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.location !== this.props.location;
    }

    render() {
      return <FadeIn><WrappedComponent {...this.props} /></FadeIn>;
    }
  };
}
