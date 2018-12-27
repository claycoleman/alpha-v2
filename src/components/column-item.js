import React from 'react';

export default props => (
  <div css={{
    width: "50%",
    float:'left',
    textAlign: 'center',
    marginTop: '25px',
    '@media(max-width: 768px)': {
      float: 'none',
      width: 'auto'
    }
  }}>
    <img src={props.bodyImage} css={{width: '65%', textAlign: 'center'}}/>
    <h4>{props.title}</h4>
    <p css={{width: '90%', marginLeft: '80px', textAlign: 'left'}}>{props.bodyText}</p>
    {/* <button href={props.moreLink}>More -></button> */}
  </div>
);
