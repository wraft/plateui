import React from 'react';
import { Image, Text, Box, BoxProps } from 'theme-ui';

import { Assign, ForwardRef } from '../../types';

export type AvatarProps = Assign<React.ComponentPropsWithRef<'p'>, BoxProps>;

interface AvatarFrameProps {
  id?: string;
  name?: string;
  image?: string;
}

const AvatarFrame = ({ image, id, name }: AvatarFrameProps) => {
  return (
    <Box
      key={id}
      sx={{
        width: '25%',
        bg: 'primary',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        minHeight: '180px',
        borderRadius: '0.5rem',
        opacity: 0.9,
        ':hover': {
          opacity: 1,
        },
        overflow: 'hidden',
        position: 'relative',
        m: 1,
        mb: 3,
        mr: 3,
        ml: 0,
      }}
    >
      <Box
        as="span"
        sx={{
          display: 'block',
          pl: 3,
          textDecoration: 'none',
          pt: 3,
        }}
      >
        <Text
          sx={{
            position: 'absolute',
            bottom: 0,
            pb: 3,
            backgroundImage: 'linear-gradient(360deg, #000000bf, transparent)',
            left: 0,
            right: 0,
            fontSize: 4,
            fontWeight: 100,
            pl: 4,
            pt: 2,
          }}
          color="white"
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
};

const Avatar: ForwardRef<HTMLParagraphElement, AvatarProps> = React.forwardRef((props, ref) => (
  <Box {...props} ref={ref}>
    <AvatarFrame {...props}/>
  </Box>
));

Avatar.displayName = 'Avatar';

export default Avatar;
