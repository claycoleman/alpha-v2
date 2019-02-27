import React from 'react';
import GreenButton from '../greenbutton';

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
    <p>{props.bodyContent}</p>
    <ol>
        <li>{props.bodyListItem1}</li>
        <li>{props.bodyListItem2}</li>
        <li>{props.bodyListItem3}</li>
        <li>{props.bodyListItem4}</li>
        <li css={{
          listStyleType:'none',
          textAlign: 'center',
        }}> <GreenButton text = {props.buttonTitle} to= {props.buttonRef}></GreenButton></li>
    </ol>
  </div>
);
