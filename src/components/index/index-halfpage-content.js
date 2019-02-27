import React from 'react';
import GreenButton from '../greenbutton';
import CustomYoutube from '../CustomYoutube';

import styled from 'styled-components';
import { Row, Col } from '..';

const ColHeader = styled.h3`
  text-align: center;
  margin: 16px 0;
`;

export default props => (
  <Row>
    <Col>
      <ColHeader>Introduction to Alpha</ColHeader>
      <CustomYoutube videoId={'veO6l0mVv6o'} />
    </Col>

    <Col>
      <ColHeader>Donate</ColHeader>
      <p>
        While you may not be able to sacrifice your time, your contributions can still make a
        difference. Alpha is a registered 501 (c)(3) nonprofit solely reliant on private donors.
        Your contributions make a difference in a number of ways:
      </p>
      <ul>
        <li>College Application Fees</li>
        <li>ACT Prep Materials and Fees</li>
        <li>Scholarships</li>
        <li>Leadership Costs</li>
      </ul>
      <div
        css={{
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        <GreenButton text={'Donate Now'} to={props.buttonRef} />
      </div>
    </Col>
  </Row>
);
