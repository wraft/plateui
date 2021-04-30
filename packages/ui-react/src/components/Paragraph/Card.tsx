import React from 'react';
import { Box, BoxProps } from 'theme-ui';

import { Assign, ForwardRef } from '../../types';

export type CardProps = Assign<React.ComponentPropsWithRef<'div'>, BoxProps>;

const Card: ForwardRef<
  HTMLParagraphElement,
  CardProps
> = React.forwardRef((props, ref) => <Box {...props} ref={ref} />);

Card.displayName = 'Card';

export default Card;
