import React from 'react';

export default props => (
  <div
    css={{
      width: '50%',
      padding: '16px',
      textAlign: 'left',
      display: 'inline-block',
      color: 'white',
      '@media(max-width: 767px)': {
        width: '100%',
      },
    }}
  >
    <img src={props.bodyImage} css={{ width: '100%', textAlign: 'center' }} />
    <h4 css={{ marginBottom: '8px' }}>{props.title}</h4>
    <p>{props.bodyText}</p>
    {/* <button href={props.moreLink}>More -></button> */}
  </div>
);
