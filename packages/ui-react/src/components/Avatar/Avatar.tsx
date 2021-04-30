import React from 'react';
import { Image, Text, Box, BoxProps } from 'theme-ui';

import { Assign, ForwardRef } from '../../types';

export type AvatarProps = Assign<React.ComponentPropsWithRef<'p'>, BoxProps>;

interface AvatarFrameProps {
  id?: string;
  name?: string;
  image: string;
}

const AvatarFrame = ({ image, id, name }: AvatarFrameProps) => {
  return (
    <Box
      key={id}
      sx={{
        width: '23%',
        border: 'solid 1px #000',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        minHeight: '200px',
        borderRadius: '0.5rem',
        m: 2,
        ml: 0,
      }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, black, transparent)',
        }}
      >
        <Text sx={{ fontSize: 4, fontWeight: 100, pl: 2, pt: 2 }} color="white">
          {name}
        </Text>
        <Text sx={{ fontSize: 1, fontWeight: 100, pl: 2, pt: 2, opacity: 0.4 }} color="white">
          20
        </Text>
      </Box>
    </Box>
  );
};

const Avatar: ForwardRef<HTMLParagraphElement, AvatarProps> = React.forwardRef((props, ref) => (
  <Box {...props} ref={ref}>
    <AvatarFrame image="https://picsum.photos/100" id="01" name="Name" />
  </Box>
));

Avatar.displayName = 'Avatar';

export default Avatar;
