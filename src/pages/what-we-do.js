import React from 'react';
import Header from '../components/header';
import BasePage from './base-page';
import {Container} from 'reactstrap';
import img from '../../assets/images/WhatWeDo2.jpg';
import img2 from '../../assets/images/ACTPrep.jpg';
import ColumnItem from '../components/column-item';

export default class WhatWeDoPage extends BasePage {
  componentDidMount() {}

  renderPageContents() {
    return (
      <div css={{
        "width": "100%",
      }}>
      <Container>
        <Header css={{float: 'left'}}>What We Do</Header>      
        <ColumnItem bodyImage = {img2} title = 'ACT Prep Class' bodyText= {'We host a low-cost, highly effective 8-week ACT preparation course that provides a practice book, a study schedule, and group practice sessions to each individual student.'}></ColumnItem>
        <ColumnItem bodyImage = {img} title = 'College Applications' bodyText = {'We help the students with the challenging process of applying to college. WE have been in their shoes and we know that the process is much easier when there is someone to help.'}></ColumnItem>
        </Container>
      </div>
    );
  }
}
