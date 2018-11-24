import React from 'react';

export default props => (
  <div css={{
    float: "right"
  }}>
    <h3>{props.title}</h3>
    <ul>
        <li>{props.bodyListItems}</li>
    </ul>
  </div>
);
