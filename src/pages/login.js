import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from '../components/base-page';
import { MENTOR_CODE, STUDENT_CODE } from '../utils/constants';
import { authenticateMentor, authenticateStudent } from '../utils/auth';

export default class LoginPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      enteredCode: '',
      incorrectCode: false,
    };
  }

  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      if (e.target.value === MENTOR_CODE) {
        authenticateMentor();
        navigate('/mentors/');
      } else if (e.target.value === STUDENT_CODE) {
        authenticateStudent();
        navigate('/students/');
      } else {
        this.setState({
          incorrectCode: true,
        });
      }
    }
  };

  _handleTextChange = e => {
    this.setState({ enteredCode: e.target.value });
  };

  renderPageContents() {
    return (
      <div>
        <Header>Login</Header>
        <p>Alpha Mentors and Students, enter your passcode here to access trainings and other materials.</p>
        <input placeholder="passcode" onChange={this._handleTextChange} onKeyDown={this._handleKeyDown} value={this.state.enteredCode} />
        {this.state.incorrectCode && <h3>Incorrect passcode!</h3>}
      </div>
    );
  }
}
