import React from 'react';
import Header from '../components/header';
import { navigate } from 'gatsby';
import BasePage from './base-page';
import { USER_CODE } from '../utils/local-constants';
import { CENTRAL_GREEN_COLOR } from '../utils/constants';
import { authenticateMentor, authenticateStudent, authenticateUser } from '../utils/auth';

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
      this._attemptLogin(e.target.value);
    }
  };

  _attemptLogin = enteredCode => {
    if (!enteredCode) {
      enteredCode = this.state.enteredCode;
    }
    if (enteredCode === USER_CODE) {
      authenticateUser();
      navigate('/portal/');
    } else {
      this.setState({
        incorrectCode: true,
      });
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
              fontWeight: 'bold !important',
            }}
            className="form-control"
            placeholder="Login Code"
            onChange={this._handleTextChange}
            onKeyDown={this._handleKeyDown}
            value={this.state.enteredCode}
            type="text"
          />
          <div
            onClick={() => this._attemptLogin(this.state.enteredCode)}
            css={{
              marginTop: '8px',
              width: '100%',
              fontFamily: '"Avenir Next", sans-serif',
              display: 'inline-block',
              fontWeight: '400',
              color: '#212529',
              textAlign: 'center',
              verticalAlign: 'middle',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              MsUserSelect: 'none',
              userSelect: 'none',
              color: '#495057',
              backgroundColor: 'white',
              border: '1px solid #ced4da',
              padding: '.375rem .75rem',
              fontSize: '1rem',
              lineHeight: '1.5',
              borderRadius: '.25rem',
              cursor: 'pointer',
              transition:
                'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            }}
          >
            Log In
          </div>
          {this.state.incorrectCode && (
            <h4 style={{ color: 'black', margin: '0', marginTop: '16px' }}>Incorrect passcode!</h4>
          )}
        </div>
      </Container>
    );
  }
}
