import React from 'react';
import { Link } from 'gatsby';
import { CENTRAL_GREEN_COLOR } from '../../utils/constants';

export default props => {
  const currUrl = window.location.pathname === props.to;
  return (
    <Link
      css={{
        display: 'block',
        margin: '0',
        marginLeft: '0.75rem',
        marginRight: '0.75rem',
        fontSize: '0.7937rem',
        lineHeight: 'calc(2.5rem - 0.25rem)',
        marginBottom: '0.125rem',
        paddingTop: '0.25rem',
        borderBottom: '0.125rem solid transparent',
        borderBottomColor: currUrl ? CENTRAL_GREEN_COLOR : 'transparent',
        color: currUrl ? CENTRAL_GREEN_COLOR : 'inherit',
        ':hover': {
          color: CENTRAL_GREEN_COLOR,
          textDecorationLine: 'none', 
          borderBottom: '0.125rem solid transparent',
          borderBottomColor: CENTRAL_GREEN_COLOR,      
        },
        WebkitFontSmoothing: 'antialiased',
        position: 'relative',
        WebkitTextDecoration: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        top: '0',
        WebkitTransition: 'color 250ms cubic-bezier(0.4,0,0.2,1)',
        transition: 'color 250ms cubic-bezier(0.4,0,0.2,1)',
        zIndex: '1',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
