import React from 'react';
import { Text, Box, Label, Input } from 'theme-ui';

// import { Input } from "@chakra-ui/core";

interface Props {
  register?: any;
  label?: string;
  name?: string;
  defaultValue?: string;
  mr?: number;
  placeholder?: string;
  sub?: string;
  required?: boolean;
}

const Field: React.FC<Props> = ({
  name,
  label,
  placeholder,
  register,
  defaultValue,
  mr,
  sub,
  required = true,
}) => {
  return (
    <Box pb={2} mr={mr} sx={{ position: 'relative' }}>
      {sub && (
        <Text color="#444" sx={{ position: 'absolute', right: 16, top: 32 }}>
          {sub}
        </Text>
      )}
      <Label htmlFor="description" mb={1}>
        {label}
      </Label>
      <Input
        placeholder={placeholder ? placeholder : ''}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        ref={register({ required: required })}
      />
    </Box>
  );
};

export default Field;
