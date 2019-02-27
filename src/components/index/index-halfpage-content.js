import React from 'react';
import GreenButton from '../greenbutton';

export default props => (
  <div
    css={{
      width: '40%',
      float: 'right',
      display: 'block',
      '@media(max-width: 768px)': {
        float: 'none',
        width: 'auto',
      },
    }}
  >
    <h4
      css={{
        textAlign: 'center',
      }}
    >
      Donate
    </h4>
    <p>
      While you may not be able to sacrifice your time, your contributions can still make a
      difference. Alpha is a registered 501 (c)(3) nonprofit solely reliant on private donors. Your
      contributions make a difference in a number of ways:
    </p>
    <ul>
      <li>College Application Fees</li>
      <li>ACT Prep Materials and Fees</li>
      <li>Scholarships</li>
      <li>Leadership Costs</li>
      <li
        css={{
          listStyleType: 'none',
          textAlign: 'center',
        }}
      >
        {' '}
        <GreenButton text={"Donate Now"} to={props.buttonRef} />
      </li>
    </ul>
  </div>
);
