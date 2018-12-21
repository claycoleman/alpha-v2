import React from 'react';
import styled from 'styled-components';
// import { Button } from 'reactstrap';



const Button = styled.section`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s 
    background-color: #017C3D;
    color:white;
    margin-left:auto;
    margin-right:auto;
`;

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="success">Donate Now</Button>{' '}
      </div>
    );
  }
}
