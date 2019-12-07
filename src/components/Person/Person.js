import React, { PureComponent } from 'react';
import Auxiliary from '../../higher-order-components/Auxiliary';
import withClass from '../../higher-order-components/withClass';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './person.css';

// No need for this as we are gonna return a higher order component
// const StyledDiv = styled.div`
//     width: 100%;
//     border: 2px solid black;
//     box-shadow: 0 2px 20px black;
//     padding: 15px;
//     box-sizing: border-box;

//   :not(:last-child) {
//     margin-bottom: 20px;
//   }

//   .mono {
//     font-family: monospace;
//     color: red;
//   }  

//   @media (min-width: 500px) {
//     width: 450px;
//   }
//   `;

class Person extends PureComponent {

  constructor(props) {
    console.log('[Person] constructor');
    super(props);
    this.inputStyle = {
      borderRadius: '20px'
    };
    this.inputEl = React.createRef();
  }

  // This is was only used to test the ErrorBoundary component
  // if (props.name === 'petruci') {
  //   throw new Error('name cannot be "petruci"');
  // }

  // componentWillUnmount() {
  //   console.log(`[Person] : UNMOUNTING`)
  // }

  // //This is neccessary because props always change if props.name changes, after trying it out with PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.name !== this.props.name;
  // }

  componentDidMount() {
    this.inputEl.current.focus();
  }

  render() {
    console.log('[Person] render');
    return (
      <Auxiliary>
        {this.props.isLoggedIn ? <h1>Logged in</h1> : <h1>Please log in</h1>}
        <h2 className="mono" onClick={this.props.click}>Im {this.props.name}, I am {this.props.age} years old.</h2>
        <input
          type="text"
          onChange={this.props.changed}
          ref={this.inputEl}
          placeholder={this.props.name}
          style={this.inputStyle}
        />
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  age: PropTypes.number,
  changed: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

export default withClass(Person, 'Person');