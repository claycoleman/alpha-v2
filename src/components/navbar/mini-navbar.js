import React from 'react';
import MiniNavbarLink from './mini-navbar-link';
import { isAuthenticatedMentor, isAuthenticatedStudent } from '../../utils/auth';

export default props => {
  let finalLinkText = 'login';
  if (isAuthenticatedMentor()) {
    finalLinkText = 'mentors';
  } else if (isAuthenticatedStudent()) {
    finalLinkText = 'students';
  }

  return (
    <div
      css={{
        position: 'fixed',
        display: 'flex',
        WebkitBoxPack: 'space-around',
        WebkitJustifyContent: 'space-around',
        MsFlexPack: 'space-around',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '5',
        borderTop: '1px solid #ede7f3',
        background: '#fbfafc',
        height: '2.5rem',
        fontFamily: 'Futura PT,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif',
        paddingBottom: 'env(safe-area-inset-bottom)',
        '@media(min-width: 768px)': {
          display: 'none',
        }
      }}
    >
      <MiniNavbarLink to="/">Home</MiniNavbarLink>
      <MiniNavbarLink to="/what-we-do/">What We Do</MiniNavbarLink>
      <MiniNavbarLink to="/who-we-are/">Who We Are</MiniNavbarLink>
      <MiniNavbarLink to={`/${finalLinkText}/`}>{finalLinkText}</MiniNavbarLink>
    </div>
  );
};
