import React from 'react';
import logo from '../../../assets/images/logo.png';
import { Link } from 'gatsby';

export default props => (
  <Link to='/'>
    <img
      css={{
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        zIndex: '1',
        verticalAlign: 'top',
        flex: `0 0 3rem`,
        width: '3rem',
        minWidth: '3rem',
        height: '3rem',
        minHeight: '3rem',
        margin: 0,
      }}
      src={logo}
      alt="Logo"
    />
  </Link>
);