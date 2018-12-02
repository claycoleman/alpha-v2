import React from 'react';

export default props => (
  <div css={{
    width: "50%",
    float: "right",
    '@media(max-width: 768px)': {
      float: 'none',
      width: 'auto'
    }}}>
    <h3 css={{
      fontSize: 25,
      textAlign:"center",
    }}>{props.title}</h3>
    <ul>
        <li>{props.bodyListItems}</li>
    </ul>
  </div>
);
