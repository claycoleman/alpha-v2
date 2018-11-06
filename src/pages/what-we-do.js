import React from 'react';
import Header from '../components/header';
import BasePage from '../components/base-page';

export default class WhatWeDoPage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        <Header>What We Do</Header>
        <p>Discuss the ACT prep stuff from Alpha, 6-week program?</p>
        <p>Donate section</p>
      </div>
    );
  }
}
