import React from 'react';

export default props => (
  <div css={{
    width: "100%",
    float: "left",
    '@media(max-width: 768px)': {
      float: 'none',
      width: 'auto'
    }
  }}>
    <h4>{props.title}</h4>
    <p>{props.content}</p>
  </div>
);