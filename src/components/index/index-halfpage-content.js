import React from 'react';

export default props => (
  <div css={{
    width: '40%',
    float: 'right',
    display: 'block',
    '@media(max-width: 768px)': {
      float: 'none',
      width: 'auto'
    }}}>
    <h4 css={{
      textAlign:"center",
    }}>{props.title}</h4>
    <ul>
        <li css={{
          listStyleType:'none'
        }}>{props.bodyListItems}</li>
    </ul>
  </div>
);
