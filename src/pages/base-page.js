import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/navbar/navbar';
import MiniNavbar from '../components/navbar/mini-navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BasePage extends Component {
  constructor(props) {
    super(props);
  }

  // to override
  renderPageContents() {}
  renderBodyClass() {}

  render() {
    return (
      <div
        css={{
          '@media(max-width: 767px)': {
            paddingBottom: 60,
          },
        }}
        className={this.renderBodyClass()}
      >
        <Navbar />
        {/* <MiniNavbar /> */}

        <Container initialMargin>{this.renderPageContents()}</Container>
      </div>
    );
  }
}
