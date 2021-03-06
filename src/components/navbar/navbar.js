import React from 'react';
import LogoImage from './logo-image';
import NavbarLink from './navbar-link';
import { RESPONSIVE_OUTER_PADDINGS } from '../../utils/constants';
import {
  isAuthenticatedMentor,
  isAuthenticatedStudent,
  isAuthenticatedUser,
} from '../../utils/auth';

export default props => {
  let finalLinkText = 'login';
  if (isAuthenticatedUser()) {
    finalLinkText = 'portal';
  }
  // if (isAuthenticatedMentor()) {
  //   finalLinkText = 'mentors';
  // } else if (isAuthenticatedStudent()) {
  //   finalLinkText = 'students';
  // }

  return (
    <header
      css={{
        backgroundColor: 'rgba(255, 255, 255, 0.976)',
        position: 'fixed',
        height: '3rem',
        left: '0px',
        right: '0px',
        top: '0px',
        marginBottom: '1.5rem',
        zIndex: '2',
      }}
    >
      <div
        css={[
          RESPONSIVE_OUTER_PADDINGS,
          {
            fontFamily:
              '"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
            display: 'flex',
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            margin: '0px auto',
            borderBottom: '1px solid rgba(34,34,34,0.4)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              right: '0px',
              width: '100%',
              height: '1px',
              zIndex: '-1',
              background: 'rgb(245, 243, 247)',
            },
          },
        ]}
      >
        <LogoImage />
        <div
          css={{
            WebkitAlignSelf: 'flex-end',
            MsFlexItemAlign: 'end',
            alignSelf: 'flex-end',
            display: 'flex',
            WebkitBoxFlex: '1',
            WebkitFlexGrow: '1',
            MsFlexPositive: '1',
            flexGrow: '1',
            margin: '0',
            marginLeft: '0.35rem',
            listStyle: 'none',
            WebkitMaskImage:
              'linear-gradient(to right,transparent,white 0.175rem,white 98%,transparent)',
            maskImage: 'linear-gradient(to right,transparent,white 0.175rem,white 98%,transparent)',
            overflowX: 'auto',
          }}
        />
        <div
          css={{
            display: 'flex',
            // '@media(max-width: 767px)': {
            //   display: 'none',
            // },
          }}
        >
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/who-we-are/">What is Alpha?</NavbarLink>
          {/* right now, the portal link is expected to be the third link in navbar-link.css so if 
          you add more or change the order, make sure it's reflected there as well */}
          <NavbarLink to={`/${finalLinkText}/`}>{finalLinkText}</NavbarLink>
        </div>
      </div>
    </header>
  );
};
