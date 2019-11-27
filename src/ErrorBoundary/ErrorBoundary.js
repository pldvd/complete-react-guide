import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: ''
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. The error message is: {this.state.errorMsg}</h1>
    }
    return this.props.children;
  }

}

export default ErrorBoundary;