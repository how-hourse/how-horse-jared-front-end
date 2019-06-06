import React, { PureComponent } from 'react';
import {
  Link
} from 'react-router-dom';

export default class SignIn extends PureComponent {
  state = {
    name: '',
  };

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  render() {
   
    const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',

      height: '80vh'
    };

    const headerStyle = {
      textAlign: 'center',
      margin: '25px'
    };

    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const inputStyle = {
      textAlign: 'center',
      height: '30px',
      backgroundColor: 'lightblue',
      fontSize: '22px'
    };
    
    const buttonStyle = {
      fontSize: '20px',
      backgroundColor: 'lightgrey',
      color: 'black',
      margin: '5px',
      textDecoration: 'none',
      padding: '8px'

    };

    return (
      <div style={divStyle}>
        <header style={headerStyle}>
          <h1>ENTER YOUR NAME TO HORSE AROUND</h1>
        </header>
        <form style={formStyle}>
          <input type="text" name="name" value={this.state.name} placeholder="NAME" style={inputStyle} onChange={this.handleNameChange} />
          <Link to={`/${this.state.name}`} style={buttonStyle}>SUBMIT</Link>
        </form>
      </div>
    );
  }
}
