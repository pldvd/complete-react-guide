import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   if
  // }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong.</h1>
    } 
    return this.props.children;
  }

  //to FINISH!!!
}

export default ErrorBoundary;