import React from 'react';
import { RESPONSIVE_OUTER_MARGINS } from '../utils/constants';

export default props => (
  <div css={[RESPONSIVE_OUTER_MARGINS, { marginTop: props.initialMargin ? '3rem' : 'inherit' }]}>
    {props.children}
  </div>
);
