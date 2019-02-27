import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar/navbar';
import MiniNavbar from '../components/navbar/mini-navbar';

export default class BasePage extends Component {
  constructor(props) {
    super(props);
  }

  // to override
  renderPageContents() {}

  render() {
    return (
      <div>
        <Navbar />
        {/* <MiniNavbar /> */}

        <Container initialMargin>
          {this.renderPageContents()}
        </Container>
      </div>
    );
  }
}
