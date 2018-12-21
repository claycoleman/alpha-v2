import React from 'react';
import Header from '../components/header';
import BasePage from '../components/base-page';
import { Button, Container} from 'reactstrap';
import GreenButton from '../components/greenbutton';


export default class WhatWeDoPage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div css={{
        "width": "100%",
      }}>
        <Header>What We Do</Header>
        <Container css={{
          "width": "50%",
          "textAlign": "center",
        }}>
        <h2>ACT Prep Class</h2>
        </Container>
        <Container css={{
          "width": "50%",
          "textAlign": "center",
        }}>
        <h2>Donate</h2>
        <p>If you would like to support us in our efforts to raise more money to help these High School Kids. Please click the following button.</p>
        <GreenButton></GreenButton>
        </Container>
      </div>
    );
  }
}
