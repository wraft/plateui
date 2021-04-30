import React from 'react';
import { Box, BoxProps } from 'theme-ui';

import { Assign, ForwardRef } from '../../types';

export type AvatarProps = Assign<React.ComponentPropsWithRef<'p'>, BoxProps>;

const Avatar: ForwardRef<
  HTMLParagraphElement,
  AvatarProps
> = React.forwardRef((props, ref) => <Box {...props} ref={ref}>{props?.children}</Box>);

Avatar.displayName = 'Avatar';

export default Avatar;
