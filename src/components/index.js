import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const Col = styled.div`
  box-sizing: border-box;
  flex: 1;
  width: 50%;
  display: inline-block;
  padding: 0 16px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;
