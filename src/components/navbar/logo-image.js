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
        flex: `0 0 2.5rem`,
        width: '2.5rem',
        minWidth: '2.5rem',
        height: '2.5rem',
        minHeight: '2.5rem',
        margin: 0,
      }}
      src={logo}
      alt="Logo"
    />
  </Link>
);