import React from 'react';
import Header from '../components/header';
import BasePage from '../components/base-page';

export default class WhoWeArePage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div>
        <Header>Who We Are</Header>
        <p>Information about the organization itself</p>
        <p>Leadership team with a slider? We honestly don't need that many people on here, maybe just top level leadership who would be communicated with</p>
      </div>
    );
  }
}
