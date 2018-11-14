import React from 'react';
import { Link } from 'gatsby';
import { CENTRAL_GREEN_COLOR } from '../../utils/constants';

export default props => {
  const currUrl = window.location.pathname == props.to;
  return (
    <Link
      css={{
        color: currUrl ? CENTRAL_GREEN_COLOR : 'inherit',
        borderRadius: '2px',
        fontSize: '0.70711rem',
        WebkitFlexShrink: '0',
        MsFlexNegative: '0',
        flexShrink: '0',
        lineHeight: '1',
        WebkitTextDecoration: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
        // fontWeight: currUrl ? 'bold' : 'inherit',
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};
