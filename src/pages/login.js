import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { MENTOR_CODE, STUDENT_CODE, CENTRAL_GREEN_COLOR } from '../utils/constants';
import { authenticateMentor, authenticateStudent } from '../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div css={{
        "textAlign":"center",
        "width": "75%",
        "margin": "auto",
        "height": "300px",
        "marginTop": "150px !important",
        "backgroundColor": CENTRAL_GREEN_COLOR,
        "display":"block",
      }}>
        <h2 css={{
          "color":"white",
          "textAlign": "center",
        }}>Login</h2>
        <p css={{
          "color": "white",
        }}>Alpha Mentors and Students, enter your passcode here to access trainings and other materials.</p>
        <input css={{"width":"25% !important",
                      "display":"block",
                      "marginLeft": "auto",
                      "marginRight": "auto",                       
        }}
        className = "form-control" placeholder="Passcode" onChange={this._handleTextChange} onKeyDown={this._handleKeyDown} value={this.state.enteredCode} type = "password" />
        {this.state.incorrectCode && <h3>Incorrect passcode!</h3>}
      </div>
    );
  }
}
