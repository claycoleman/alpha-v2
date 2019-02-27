import React from 'react';
import { CENTRAL_GREEN_COLOR } from '../utils/constants';
// import { Button } from 'reactstrap';

// const Link = styled.section`
//     display: inline-block;
//     font-weight: 400;
//     text-align: center;
//     white-space: nowrap;
//     vertical-align: middle;
//     user-select: none;
//     border: 1px solid transparent;
//     padding: .375rem .75rem;
//     font-size: 1rem;
//     line-height: 1.5;
//     border-radius: .25rem;
//     transition: color .15s 
//     background-color: #017C3D;
//     color:white;
//     margin-left:auto;
//     margin-right:auto;
// `;

export default props=>{
    return (
        <div>
          <a css={{
                  display: 'inline-block',
                  fontWeight: '400',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  verticalAlign: 'middle',
                  userSelect: 'none',
                  border: '1px solid transparent',
                  padding: '.375rem .75rem',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  borderRadius: '.25rem',
                  backgroundColor: CENTRAL_GREEN_COLOR,
                  color:'white',
                  marginLeft:'auto',
                  marginRight:'auto',
                  ':hover': {
                    color: CENTRAL_GREEN_COLOR,
                    backgroundColor: 'white',
                    textDecorationLine: 'none',
                  },
          }} href={props.to}>{props.text}
          </a>
        </div>
      );
};


