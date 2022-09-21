/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { login } from '../redux/auth/auth';
import store from '../redux/configureStore';
import './login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
    };
  }

  handleChange(field, e) {
    const { fields } = this.state;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  processForm = (e) => {
    e.preventDefault();
    store.dispatch(login(this.state.fields.email, this.state.fields.password));
    this.render();
  };

  render() {
    return (
      <div className="loginpage">
        <h1>Login</h1>
        <div className="centered">
          <form className="myform" onSubmit={this.processForm.bind(this)}>
            <input className="formitem" type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} value={this.state.fields.email} required minLength="5" maxLength="30" />
            <input className="formitem" type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} value={this.state.fields.password} required minLength="5" maxLength="30" />
            <div className="button-wrapper">
              &nbsp;
              <button className="sbutton" type="submit">Submit</button>
              &nbsp;
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
