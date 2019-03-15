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
        marginBottom: '0.125rem',
        paddingTop: '0.25rem',
        borderBottom: '0.125rem solid rgba(0,0,0,0)',
        borderBottomColor: currUrl ? CENTRAL_GREEN_COLOR : 'transparent',
        color: currUrl ? CENTRAL_GREEN_COLOR : 'inherit',
        ':hover': {
          color: CENTRAL_GREEN_COLOR,
          textDecorationLine: 'none',
          borderBottomColor: CENTRAL_GREEN_COLOR,
        },
        WebkitFontSmoothing: 'antialiased',
        position: 'relative',
        WebkitTextDecoration: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        top: '0',
        WebkitTransition: 'color 200ms cubic-bezier(0.4,0,0.2,1)',
        transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
        transitionProperty: 'color, border-bottom',

        zIndex: '1',

        '@media(max-width: 767px)': {
          marginLeft: '0.55rem',
          marginRight: '0.55rem',
          fontSize: '0.75rem',
        },

        '@media(max-width: 340px)': {
          marginLeft: '0.4rem',
          marginRight: '0.4rem',
          fontSize: '0.65rem',
        },

        '@media(max-width: 280px)': {
          marginLeft: '0.25rem',
          marginRight: '0.25rem',
          fontSize: '0.2rem',
        },
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
