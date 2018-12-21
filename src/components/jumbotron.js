import React from 'react';
import { Jumbotron, Container, Button, } from 'reactstrap';
import { Link } from 'react-router'
import { CENTRAL_GREEN_COLOR } from '../utils/constants';
import GreenButton from '../components/greenbutton';
import styled from 'styled-components';
import img from '../../assets/images/Jumbotron.jpg';

const Wrapper = styled.section`
  padding: 4em;
  background-image: url(${img});
  background-position: center center;
  margin-bottom:50px;
  height:400px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  color:white;
`;

const Example = (props) => {
  return (
    <div>
      <Wrapper>
        <Title>We are Alpha</Title>
        {/* <p className="lead" css={{
          color: "white",
          textAlign:"center",
        }}>If you're interested in helping in our cause, please donate here.</p> */}
        <GreenButton></GreenButton>
      </Wrapper>
    </div>
  );
};

export default Example;
  