import React from 'react';
import { RESPONSIVE_OUTER_MARGINS } from '../utils/constants';

export default props => <div css={[RESPONSIVE_OUTER_MARGINS, { marginTop: props.initialMargin ? '2.5rem' : 'inherit' }]}>{props.children}</div>;
