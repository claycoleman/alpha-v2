import React, { Component } from 'react';
import Container from './container';
import Navbar from './navbar/navbar';
import MiniNavbar from './navbar/mini-navbar';

export default class BasePage extends Component {
  constructor(props) {
    super(props);
  }

  // to override
  renderPageContents() {}

  render() {
    return (
      <div css={{
        fontFamily:
              '"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      }}>
        <Navbar />
        <MiniNavbar />

        <Container initialMargin>
          {this.renderPageContents()}
        </Container>
      </div>
    );
  }
}
