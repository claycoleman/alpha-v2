import React from 'react';
import { Jumbotron, Container, Button, } from 'reactstrap';
import { Link } from 'react-router'
import { CENTRAL_GREEN_COLOR } from '../utils/constants';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid css={{
        "backgroundImage": "url(../../../assets/images/Jumbotron.jpg)",
    }} >
        <Container fluid>
          <h1 className="display-3">We are Alpha</h1>
          <p className="lead">If you're interested in helping in our cause, please donate here.</p>
          <Button tag={Link} to="www.facebook.com">Donate Here</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
  
