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
  background-position: 0% 70%;
  margin-bottom:50px;
  height:400px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
  color:white;
  margin-top: 40px;
`;

const Example = (props) => {
  return (
    <div>
      <Wrapper>
        <Title>We are Alpha</Title>
        <GreenButton text = 'Donate Now' to='https://www.paypal.com/donate/?token=lpxLoY4Qi1Xk6PF846n-lul3ZEzGZWDIt0vH4bkuGOW2GymcPEIt-iypJIDIvsprHteX3m&country.x=US&locale.x=US'></GreenButton>
      </Wrapper>
    </div>
  );
};

export default Example;
  