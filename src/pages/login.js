import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { MENTOR_CODE, STUDENT_CODE, CENTRAL_GREEN_COLOR } from '../utils/constants';
import { authenticateMentor, authenticateStudent } from '../utils/auth';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

export default class LoginPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      enteredCode: '',
      incorrectCode: false,
      incorrectTries: 0,
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
      <Container style={{ padding: 0 }}>
        <div
          style={{
            margin: '0 auto',
            marginTop: 64,
            padding: 16,
            backgroundColor: CENTRAL_GREEN_COLOR,
            borderRadius: 4,
            maxWidth: 750,
          }}
        >
          <h2
            css={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            Login
          </h2>
          <p
            css={{
              color: 'white',
              fontFamily: '"Avenir Next", sans-serif',
            }}
          >
            Alpha Mentors and Students, enter your passcode here to access trainings and other
            materials.
          </p>
          <input
            css={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontFamily: '"Avenir Next", sans-serif',
            }}
            className="form-control"
            placeholder="Passcode"
            onChange={this._handleTextChange}
            onKeyDown={this._handleKeyDown}
            value={this.state.enteredCode}
            type="password"
          />
          {this.state.incorrectCode && (
            <h4 style={{ color: 'black', margin: '0', marginTop: '16px' }}>
              Incorrect passcode!
            </h4>
          )}
        </div>
      </Container>
    );
  }
}
