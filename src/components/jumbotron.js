import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link } from 'react-router';
import { CENTRAL_GREEN_COLOR, DONATE_LINK } from '../utils/constants';
import GreenButton from '../components/greenbutton';
import styled from 'styled-components';
import img from '../../assets/images/Jumbotron.jpg';

const Wrapper = styled.section`
  background-image: url(${img});
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 500px;
  position: absolute;
  background-position: left;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0px 40px;

  /* why do we need this? */
  &:before {
    /* content: ''; */
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  @media (max-width: 767px) {
    height: 450px;
    padding: 0px 24px;
  }
`;

const BannerHelper = styled.div`
  height: 445px;

  @media (max-width: 767px) {
    height: 395px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 1;
  color: white;
  margin-top: 40px;

  @media (max-width: 767px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

const Example = props => {
  return (
    <div>
      <BannerHelper />
      <Wrapper>
        <Title>We are Alpha</Title>
        <GreenButton text="Donate Now" to={DONATE_LINK} />
      </Wrapper>
    </div>
  );
};

export default Example;
