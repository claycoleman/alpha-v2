import React from 'react';

export default props => (
  <div css={{
    width: "50%",
    float: "left",
    '@media(max-width: 768px)': {
      float: 'none',
      width: 'auto'
    }
  }}>
    <img href={props.bodyImage} />
    <h3>{props.title}</h3>
    <p>{props.bodyText}</p>
    <button href={props.moreLink}>More -></button>
  </div>
);
