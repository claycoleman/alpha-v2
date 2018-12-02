import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div css={{
        backgroundImage: 'url(../../assets/images/Jumbotron)',
    }}>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">We are Alpha</h1>
          <p className="lead">If you're interested in helping in our cause, please donate here.</p>
          <Button>Donate Here</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
  
